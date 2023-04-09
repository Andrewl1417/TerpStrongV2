import Exercise from "./Exercise.js";

const ExerciseList = ({ exercises, onClick }) => {

  return (
    <div>
      {exercises.map((ex) => (
        <Exercise key={ex.id} exercise={ex} onClick={onClick} />
      ))}
    </div>
  );
};

export default ExerciseList;
