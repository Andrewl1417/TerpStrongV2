import React from "react";

const headerStyle = {
    backgroundColor: "#e21833",
};

const Header = () => {
    return (
        <div className="sticky-top w-100 center-text py-3" style={headerStyle}>
            <h1>TerpStrong</h1>
        </div>
    );
};

export default Header;
