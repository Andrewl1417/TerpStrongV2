import React from "react";

const filterCapsuleStyle = {
    backgroundColor: "#a4161a",
    color: "#e9ecef",
    fontSize: "0.85rem" 
};

const FilterCapsule = ({ filterName }) => {
    return (
        <div className="rounded-pill px-2 mx-1" style={filterCapsuleStyle}>
            {filterName}
        </div>
    );
};

export default FilterCapsule;
