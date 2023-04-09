import { useState, useEffect } from "react";
import Gym from "../GymPage/Gym";
import ExerciseList from "../GymPage/ExerciseList";
import Exercise from "../GymPage/Exercise";

const Daily = ({ day, onFinish }) => {
  const [page, setPage] = useState(1);

  const [finish, setFinish] = useState(false);

  const [exercises, setExercises] = useState([]);

  const updateExercises = (exercise) => {
    setExercises([...exercises, exercise]);
    setPage(1);
  };

  const showExerciseDetails = (exercise) => {
    return <Exercise key={exercise.id} exercise={exercise} />;
  };

  return (
    <div>
      <h1>{day}</h1>
      {page === 1 && !finish && (
        <button className="btn btn-primary" onClick={() => setPage(2)}>
          Add Exercise
        </button>
      )}
      {page === 2 && <Gym onClick={updateExercises} />}
      {exercises.isEmpty ? (
        <h2>No Exercises</h2>
      ) : (
        exercises.map((exercise) => showExerciseDetails(exercise))
      )}
      {!finish && (
        <>
          <button
            className="btn btn-primary mx-3"
            onClick={() => {
              setFinish(true);
            }}
          >
            Finish Logging
          </button>
          <button className="btn btn-danger" onClick={() => onFinish()}>
            Cancel
          </button>
        </>
      )}
      {finish && (
        <button className="btn btn-danger" onClick={() => onFinish()}>
          Go Back to Home Page
        </button>
      )}
    </div>
  );
};

export default Daily;
