import "./App.css";
import React from "react";
import Header from "./Components/Header.js";
import Footer from "./Components/Footer.js";
import Gym from "./Components/GymPage/Gym.js";
import Home from "./Components/LoggingPage/Home.js";
import Account from "./Components/Account.js";
import { useState } from "react";

function App() {
    const [pageNum, setPageNum] = useState(1);

    const changePage = (p) => {
        setPageNum(p);
        console.log(pageNum);
    };

    return (
        <div className="App">
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <div className="mb-auto mt-5 pt-3">
                    {pageNum === 1 && <Gym />}
                    {pageNum === 2 && <Home />}
                    {pageNum === 3 && <Account />}
                </div>
                <Footer onClick={changePage} />
            </div>
        </div>
    );
}

export default App;
