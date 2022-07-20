import React from "react";
import { Route, Routes } from "react-router-dom"; 
import ScreenRecording from "./ScreenRecording"; 
import Draw from "./Components/Draw";

const Router = () => (
 
    <Routes>
      <Route exact path="/" element={<ScreenRecording />} /> 
      <Route exact path="/draw" element={<Draw />} /> 
    </Routes>
 
);
export default Router;
