import * as React from 'react';

interface NavProps {
    title: string
}

export const Navbar = (props: NavProps) => {
    return (
        <nav style={navStyle}>
            <h1 style={titleStyle}>{props.title}</h1>
        </nav>
    )
};

const navStyle = {
  display: "flex",
  justifyContent: "spaceBetween",
  alignItems: "center",
  padding: "0.7rem 2rem",
  width: "100%",
  opacity: "0.9",
  marginBottom: "1rem",
  background: "#ff6f61"
};

const titleStyle = {
    color: "#fff"
};