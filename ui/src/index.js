import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";

import DataCollection from "./components/data-collection";
import Feedback from "./components/feedback";
import { default as Header } from "./components/header";
import Home from "./components/home";
import reportWebVitals from "./reportWebVitals";
export const CBRContext = React.createContext();

const initialMap = {};
const initialForm = {
  ownerName: "",
  ownerPhonenumber: "",
  typeofProperty: "",
  sizeOfProperty: "",
  yearConstructed: "",
  pin: "",
  address: "",
  sizeOfCarpet: "",
  numberOfRooms: 0,
  hasGarage: "",
  isSmartHome: "",
  kitchenArea: "",
  isRenovated: "",
  renovationDetails: [],
  hasParkingFacility: "",
  hasSecuritySystems: "",
  parkingCondition: "",
  securityCondition: "",
  utilitiesCondition: "",
  roomsCondition: [],
};
const MyProvider = ({ children }) => {
  const [valueMap, setMap] = useState(initialMap);
  const [formValues, setFormValues] = useState(initialForm);

  const updateValue = (key, newValue) => {
    setMap((prevMap) => ({ ...prevMap, [key]: newValue }));
  };
  const getValueByKey = (key) =>
    valueMap[key] === undefined ? -1 : valueMap[key];

  const setFormByKey = (key, newValue) => {
    setFormValues((prevMap) => ({ ...prevMap, [key]: newValue }));
  };

  const getFormValueByKey = (key) =>
    formValues[key] === undefined ? -1 : formValues[key];

  const updateRenovationDetails = (key, newValue) => {
    const renovationDetails = {
      ...formValues["renovationDetails"],
      [key]: newValue,
    };
    setFormValues((prevMap) => ({
      ...prevMap,
      renovationDetails: renovationDetails,
    }));
  };

  const getRenovationDetails = (key) =>
    formValues["renovationDetails"][key] === undefined
      ? -1
      : formValues["renovationDetails"][key];

  return (
    <CBRContext.Provider
      value={{
        valueMap,
        updateValue,
        getValueByKey,
        setFormByKey,
        getFormValueByKey,
        formValues,
        updateRenovationDetails,
        getRenovationDetails,
      }}
    >
      {children}
    </CBRContext.Provider>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MyProvider>
      <Header />
      <div style={{ paddingTop: "12vh" }}>
        <BrowserRouter>
          <Routes>
            {/* <Route path="" element={<Contact />} /> */}
            <Route path="feedback" element={<Feedback />} />
            <Route path="/data-collection" element={<DataCollection />} />
            <Route path="/" element={<Home />}>
              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
        <App />
      </div>
    </MyProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
