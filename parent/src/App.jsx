import React from "react";
import ReactDOM from "react-dom/client";
import Employee from "services1/Employee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import NotFound from "./NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/employee" element={<Employee />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
