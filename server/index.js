require("dotenv").config();
const express = require("express");

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const PORT = process.env.PORT || 3001;

const app = express();

const { Client } = require("pg");

const client = new Client(process.env.DATABASE_URL);

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// Function to get exercises from API
const getExercises = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a348e39a40msh5aebd50a33e7f0dp185d1ejsnd63a0c5dd1f2",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const api = await fetch(
    "https://exercisedb.p.rapidapi.com/exercises",
    options
  );

  return await api.json();
};

(async () => {
  await client.connect();
  try {
    const results = await client.query("SELECT NOW()");
    // console.log(results);
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    client.end();
  }
})();

app.get("/api/exercises/:filter?", async (req, res) => {
  const filter =
    req.params.filter == undefined
      ? ""
      : ` WHERE target = '${req.params.filter}'`;
  console.log(filter);
  try {
    await new Promise(() => {
      pool.query(`SELECT * FROM all_exercises${filter}`, (err, queryResult) => {
        if (err) {
          console.error(err);
          res.status(500).send("Error fetching exercises");
        } else {
          res.json(queryResult.rows);
        }
      });
    });
  } catch (err) {
    console.error(err);
  }
});

// Logging
app.get("/api/logday", async (req, res) => {
  // create table by format DD-MM-YYYY
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const today = `${day}-${month}-${year}`;

  try {
    await new Promise(() => {
      const tableName = today;
      pool.query(
        `CREATE TABLE IF NOT EXISTS "${tableName}" (exercise_name TEXT NOT NULL,
      set_number INTEGER NOT NULL,
      reps INTEGER NOT NULL,
      weight FLOAT NOT NULL)`
      );
    });
  } catch (err) {
    console.error(err);
  }
});

console.log(`Listening on port ${PORT}`);
app.listen(PORT);
