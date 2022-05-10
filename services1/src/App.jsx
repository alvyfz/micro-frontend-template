import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <h1>Service 1</h1>
  </div>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
