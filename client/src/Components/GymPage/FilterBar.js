import React from "react";
// import SimpleBar from "simplebar-react"

const styles = {
    margin: "4px",
    padding: "4px",
    backgroundColor: "green",
    width: "50px",
    height: "10px",
    overflowX: "hidden",
    overflowY: "auto",
    textAlign: "justify",
};

const FilterBar = () => {
    return (
        <div>
            <div>FilterBar</div>
            <div style={styles}></div>
            
        </div>
    );
};

export default FilterBar;
