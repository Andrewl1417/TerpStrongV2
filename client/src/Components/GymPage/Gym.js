import Exercise from "./Exercise.js";
import Grid from "./Grid.js";
import { useState, useEffect } from "react";
import React from "react";

const Gym = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        const getExercises = async () => {
            // const exer = await fetch("/api/exercises");
            // // console.log(typeof(exercises))
            // // console.log("HERE: ", JSON.parse(exercises))
            // setExercises(exer.json());
            // console.log(exer.json());

            fetch("/api/exercises")
                .then(res => res.json())
                .then((result) => {
                    setExercises(result)
                })
        };

        getExercises();
    }, []);

    return (
        <div>
            <Grid />
            <h1>Gym</h1>
            {exercises.map((ex) => (
                <Exercise key={ex.id} exercise={ex} />
            ))}
        </div>
    );
};

export default Gym;
