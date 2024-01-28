const sqlite3 = require("sqlite3").verbose();

// Create a new SQLite database or connect to an existing one
let db = new sqlite3.Database("./votes.db", (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the votes database.");
});

// Create or ensure the existence of the 'votes' table in the database
db.run(
  `CREATE TABLE IF NOT EXISTS votes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    option TEXT NOT NULL,
    count INTEGER DEFAULT 0
)`,
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Votes table created.");
  }
);

// Export the database instance for use in other modules
module.exports = db;