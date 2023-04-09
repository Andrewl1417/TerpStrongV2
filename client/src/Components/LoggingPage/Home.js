import React from "react";
import Week from "./Week.js"
import Daily from "./Daily.js"
import { useState } from "react"

const Home = () => {
    return (
        <div className="px-4">
          <Week/>
        </div>
    );
};

export default Home;
