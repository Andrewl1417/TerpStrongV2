import ExerciseList from "../GymPage/ExerciseList.js";
import FilterList from "../GymPage//FilterList.js";
import { useState, useEffect } from "react";
import React from "react";

const Gym = ({ onClick }) => {
  const [exercises, setExercises] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    const getExercises = async () => {
      fetch("/api/exercises")
        .then((res) => res.json())
        .then((result) => {
          setExercises(result);
        });
    };

    getExercises();
  }, []);

  const getFilter = (filter) => {
    let api = "/api/exercises"
    if (filter !== "") {
      api += `/${filter}`
    }
    fetch(api)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setExercises(result);
      });
    setPage(1);
  };

  return (
    <div>
      <h1>Gym</h1>

      {page === 1 ? (
        <>
          <button onClick={() => setPage(2)}>Show Filters</button>
          <ExerciseList exercises={exercises} onClick={onClick}/>
        </>
      ) : (
        <FilterList onClick={getFilter} />
      )}
    </div>
  );
};

export default Gym;
