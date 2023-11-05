import React, { useEffect, useRef, useState } from "react";

import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import { CBRContext } from "../index";

const VideoObjectDetection = ({ videoSource }) => {
  const {
    videoURL,
    setVideoURL,
    setObjectsDetectedFromVideo,
    objectsDetectedFromVideo,
  } = React.useContext(CBRContext);
  const videoRef = useRef(null);
  const [detectedObjects, setDetectedObjects] = useState([]);
  //const [userInteracted, setUserInteracted] = useState(false);
  console.log(objectsDetectedFromVideo);
  const handlePlay = () => {
    videoRef.current.play().catch((error) => {
      console.error("Autoplay was prevented:", error);
    });
  };

  useEffect(() => {
    if (videoURL) {
      const runObjectDetection = async () => {
        const video = videoRef.current;

        const model = await cocossd.load();

        async function detect() {
          const predictions = await model.detect(video);

          // Extract only the class labels
          const objectsInFrame = predictions.map(
            (prediction) => prediction.class
          );

          for (const object of objectsInFrame) {
            setObjectsDetectedFromVideo((prevState) => prevState.add(object));
          }

          setDetectedObjects(objectsInFrame);
          requestAnimationFrame(detect);
        }

        video.play();
        console.log("ML started");
        detect();
      };

      runObjectDetection();
    }
  }, [videoURL, setObjectsDetectedFromVideo]);

  const handleVideoSelect = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const videoURL = URL.createObjectURL(selectedFile);
      setVideoURL(videoURL);
    }
  };

  return (
    <div>
      <h4>upload a video to speed up the process!</h4>
      <input type="file" accept="video/*" onChange={handleVideoSelect} />

      {videoURL && (
        <div>
          <video ref={videoRef} controls width="640" height="480" muted>
            <source src={videoURL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div>
            Detected Objects:
            <ul style={{ minHeight: "7vh" }}>
              {detectedObjects.map((object, index) => (
                <li key={index}>{object}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoObjectDetection;
