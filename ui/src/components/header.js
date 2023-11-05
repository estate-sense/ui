import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const headerStyle = {
    backgroundColor: "green",
    padding: "1px",
    color: "white",
    textAlign: "center",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
  };

  let navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };
  return (
    <header style={headerStyle}>
      <h1 onClick={handleButtonClick}>EstateSense</h1>
    </header>
  );
};

export default Header;
