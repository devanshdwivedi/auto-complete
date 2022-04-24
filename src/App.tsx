import React from "react";
import AutoComplete from "./components/autoComplete";
import COUNTRIES from "./data/Countries";

export default function App() {
  return (
    <div className="App">
      <div>
        <AutoComplete
          suggestions={COUNTRIES.map((country: any) => country.name)}
          ignorecase
          placeHolder="Search for a song here"
        />
      </div>
    </div>
  );
}
