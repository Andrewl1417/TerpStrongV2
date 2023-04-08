import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faDumbbell,
    faHome,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import React from 'react';

const iconStyle = {
    fontSize: "30px",
};

const footerStyle = {
    backgroundColor: "#e21833"
    // marginTop: "-150px",
    // position: "relative",
    // clear: "both",
    // padding: "1px"
};

const Footer = ({ onClick }) => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top sticky-bottom w-100" style={footerStyle}>
        {/* <div className="d-flex flex-wrap justify-content-between footer py-3 sticky-bottom border-top" style={footerStyle}> */}
            <div className="col">
                <FontAwesomeIcon
                    icon={faDumbbell}
                    style={iconStyle}
                    onClick={() => onClick(1)}
                />
            </div>
            <div className="col">
                <FontAwesomeIcon
                    icon={faHome}
                    style={iconStyle}
                    onClick={() => onClick(2)}
                />
            </div>
            <div className="col">
                <FontAwesomeIcon
                    icon={faUser}
                    style={iconStyle}
                    onClick={() => onClick(3)}
                />
            </div>
        {/* </div> */}
        </footer>
    );
};

export default Footer;
