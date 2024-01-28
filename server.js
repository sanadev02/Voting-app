import express from "express";
import cors from "cors";
import db from "./db.cjs";

const app = express();

app.use(cors());
app.use(express.json());

// Handle HTTP POST requests to the "/vote" endpoint
app.post("/vote", (req, res) => {
  const selectedOption = req.body.selectedOption;
  db.run(`INSERT INTO votes(option,count) VALUES(?,1)`, [selectedOption], function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`A row has been inserted.`);
    res.send(`Received vote for ${selectedOption}`);
  });
});

// Handle HTTP GET requests to the "/votes" endpoint
app.get("/votes", (req, res) => {
  db.all(
    `SELECT option, COUNT(*) as count FROM votes GROUP BY option`,
    [],
    (err, rows) => {
      if (err) {
        return console.error(err.message);
      }
      const voteCounts = {};
      rows.forEach((row) => (voteCounts[row.option] = row.count));
      res.send(voteCounts);
    }
  );
});

// Start the Express server and listen for incoming requests on port 3000
app.listen(3000, () => console.log("Server listening on port 3000"));

// Export the Express app for use in other modules
export default app;