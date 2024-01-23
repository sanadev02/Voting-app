const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./votes.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the votes database.");
});

db.run(
  `CREATE TABLE IF NOT EXISTS votes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    option TEXT NOT NULL
)`,
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Votes table created.");
  }
);

module.exports = db;
