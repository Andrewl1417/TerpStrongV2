import React from "react";
import Daily from "./Daily";
import { useState } from "react";

const title = {
  fontSize: "2em",
};

const Week = () => {
  const [day, setDay] = useState("Monday");

  const [page, setPage] = useState(1);

  const createTable = (d) => {
    console.log(d);
    setDay(d);
    setPage(2);
    fetch("/api/logday").then(() => console.log("okay"));
  };

  //   const showDays = () => {
  //     return (

  //     );
  //   };

  return (
    <div>
      <h1 style={title}>Logger</h1>
      <br />
      <br />
      {page === 1 && (
        <div>
          <div className="card col mb-4">
            <div className="card-body" onClick={() => createTable("Monday") }>
              <h5 className="card-title">Monday</h5>
            </div>
          </div>
          <div className="card col mb-4" onClick={() => createTable("Tuesday")}>
            <div className="card-body">
              <h5 className="card-title">Tuesday</h5>
            </div>
          </div>
          <div
            className="card col mb-4"
            onClick={() => createTable("Wednesday")}
          >
            <div className="card-body">
              <h5 className="card-title">Wednesday</h5>
            </div>
          </div>
          <div
            className="card col mb-4"
            onClick={() => createTable("Thursday")}
          >
            <div className="card-body">
              <h5 className="card-title">Thursday</h5>
            </div>
          </div>
          <div className="card col mb-4" onClick={() => createTable("Friday")}>
            <div className="card-body">
              <h5 className="card-title">Friday</h5>
            </div>
          </div>
          <div
            className="card col mb-4"
            onClick={() => createTable("Saturday")}
          >
            <div className="card-body">
              <h5 className="card-title">Saturday</h5>
            </div>
          </div>
          <div className="card col mb-4" onClick={() => createTable("Sunday")}>
            <div className="card-body">
              <h5 className="card-title">Sunday</h5>
            </div>
          </div>
        </div>
      )}
      {page === 2 && <Daily day={day} onFinish={() => setPage(1)} />}
    </div>
  );
};

export default Week;
