import FilterCapsule from "./FilterCapsule";
import React from 'react'

const cardStyle = {
    backgroundColor: "#e6e6e6",
    borderRadius: "5px"
};

const thumbnail = {
    maxWidth: "100%",
    height: "auto",
    borderRadius: "10px"
}

const Exercise = ({ exercise }) => {
    return (
        <div className="p-2 py-3 m-3 my-4 row" style={cardStyle}>
            <div className="col-3">
                <img src={exercise.gifUrl} alt="cat" style={thumbnail}></img>
            </div>
            <div className="col-9 align-self-center" align="left">
                <h3 className="mx-1">{exercise.name}</h3>
                <div className="d-flex flex-row mt-2">
                    <FilterCapsule filterName={exercise.bodyPart} />{" "}
                    <FilterCapsule filterName={exercise.equipment} />
                </div>
            </div>
        </div>
    );
};

export default Exercise;
