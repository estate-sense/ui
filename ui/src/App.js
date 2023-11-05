import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import VideoObjectDetection from "./components/VideoObjectDetection";
import { CBRContext } from "./index";
function App() {
  const { objectsDetectedFromVideo } = React.useContext(CBRContext);
  let navigate = useNavigate();

  const handleButtonClick = () => {
    if (objectsDetectedFromVideo.size !== 0) {
      window.alert(
        `We have detected ${objectsDetectedFromVideo.size} objects and added to the validate list`
      );
    }
    navigate("/data-collection");
  };
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40vh",
        transform: "translateY(-50%)",
      }}
    >
      <h1>Are you ready to inspect your building ?</h1>
      <VideoObjectDetection videoSource={"home.mp4"} />
      <br />
      <Button variant="contained" onClick={handleButtonClick}>
        Get started manually
      </Button>
    </div>
  );
}

export default App;
