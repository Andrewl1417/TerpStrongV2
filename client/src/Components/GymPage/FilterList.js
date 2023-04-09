const FilterList = ({ onClick }) => {
  const data = [
    "abductors",
    "abs",
    "adductors",
    "biceps",
    "calves",
    "cardiovascular system",
    "delts",
    "forearms",
    "glutes",
    "hamstrings",
    "lats",
    "levator scapulae",
    "pectorals",
    "quads",
    "serratus anterior",
    "spine",
    "traps",
    "triceps",
    "upper back",
  ];

  return (
    <div>
      <button key={data.length} onClick={() => onClick("")}>
        No Filter
      </button>
      {data.map((item, index) => {
        return (
          <button key={index} onClick={() => onClick(item)}>
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default FilterList;
