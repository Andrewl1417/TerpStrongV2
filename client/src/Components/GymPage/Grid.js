import React from "react";
// import SimpleBar from "simplebar-react"

const styles = {
    margin: "4px",
    padding: "4px",
    backgroundColor: "green",
    width: "100px",
    height: "50px",
    overflowX: "hidden",
    overflowY: "auto",
    textAlign: "justify",
};

const Grid = () => {
    return (
        <div>
            <div>FilterGrid</div>
            <div style={styles}></div>
            {/* <SimpleBar style ={styles} /> */}
        </div>
    );
};

export default Grid;
