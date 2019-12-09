"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
exports.Navbar = function (props) {
    return (React.createElement("nav", { style: navStyle },
        React.createElement("h1", { style: titleStyle }, props.title)));
};
var navStyle = {
    display: "flex",
    justifyContent: "spaceBetween",
    alignItems: "center",
    padding: "0.7rem 2rem",
    width: "100%",
    opacity: "0.9",
    marginBottom: "1rem",
    background: "#ff6f61"
};
var titleStyle = {
    color: "#fff"
};
