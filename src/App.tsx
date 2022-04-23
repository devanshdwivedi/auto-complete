import React from "react";
import GLOBAL_CONSTANTS from "./GlobalConstants";
import Form from './components/Form';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <img className="upi-img" src={GLOBAL_CONSTANTS.UPI_IMAGE} alt="Payment graphic" />
        <Form />
      </div>
    </div>
  );
}
