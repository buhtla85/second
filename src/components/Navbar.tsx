import * as React from 'react';

interface NavProps {
    title: string
};

export const Navbar = (props: NavProps) => {
    return (
        <nav style={navStyle}>
            <h1 style={titleStyle}>{props.title}</h1>
        </nav>
    )
};

const navStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.7rem 2rem",
  width: "100%",
  opacity: "0.9",
  background: "#ff6f61"
};

const titleStyle = {
    color: "#fff",
    fontSize: "2rem",
};