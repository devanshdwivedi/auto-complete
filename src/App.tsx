import React from "react";
import "./App.css";
import AutoComplete from "./components/autoComplete";
import SONGS from "./data/PorcupineTreeSongs";

export default function App() {
  return (
    <div className="App">
      <div>
        <AutoComplete
          suggestions={SONGS}
          ignorecase
          placeHolder="Search for a song here"
        />
      </div>
    </div>
  );
}
