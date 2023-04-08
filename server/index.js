require("dotenv").config();
const express = require("express");

const fetch = (...args) => import("node-fetch").then(({default: fetch}) => fetch(...args));

const { Client } = require("pg");

const client = new Client(process.env.DATABASE_URL);

const PORT = process.env.PORT || 3001;

const app = express();

const query = {
    text: "INSERT INTO all_exercises (bodypart, equipment, gifurl, name, target) VALUES($1, $2, $3, $4, $5)",
    values: []
}

const seeTable = async () => {
    await client.connect();
    const res = await client.query("SELECT * FROM ")
} 

const getExercises = async () => {
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "a348e39a40msh5aebd50a33e7f0dp185d1ejsnd63a0c5dd1f2",
            "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
    };

    const api = await fetch(
        "https://exercisedb.p.rapidapi.com/exercises",
        options
    );
    return await api.json();
}

const insertTable = async (client, callback) => {
    e = await getExercises()
    console.log(typeof(e[0].bodyPart))
    e = e[0]
    query.values.push(e.bodyPart, e.equipment, e.gifUrl, e.name, e.target)
    
    // console.log(query.values)
}

// insertTable()
client.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Data inserted successfully");
    client.end();
});

app.get("/api/exercises", async (req, res) => {
        res.json(await getExercises());
  });
  
app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`);
});
(async () => {
  await client.connect();
  try {
    const results = await client.query("SELECT NOW()");
    console.log(results);
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    client.end();
  }
})();

