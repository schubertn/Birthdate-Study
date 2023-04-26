import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import Instructions from "./routes/Instructions";
import Study from "./routes/Study";
import Demographics from "./routes/Demographics";
import End from "./routes/End";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="instructions" element={<Instructions />} />
          <Route path="study" element={<Study />} />
          <Route path="demographics" element={<Demographics />} />
          <Route path="end" element={<End />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);