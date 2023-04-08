import React from "react";
import Week from "./Week.js"
import Daily from "./Daily.js"
import { useState } from "react"

const Home = () => {
    return (
        <div class="px-4">
          <Week/>
          {/* {<Daily/>} */}
        </div>
    );
};

export default Home;
