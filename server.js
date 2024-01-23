import express from "express";
import cors from "cors";
import db from "./db.cjs";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/vote", (req, res) => {
  const selectedOption = req.body.selectedOption;
  db.run(`INSERT INTO votes(option) VALUES(?)`, [selectedOption], function (err) {
    if (err) {
      return console.error(err.message);
    }
    console.log(`A row has been inserted.`);
    res.send(`Received vote for ${selectedOption}`);
  });
});

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

app.listen(3000, () => console.log("Server listening on port 3000"));
