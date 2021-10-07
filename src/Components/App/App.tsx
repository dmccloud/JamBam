import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
  return (
    <div className="App">
      {/* SearchBar component  */}
      <SearchBar />
      <div className="App-playlist">
        {/* <!-- SearchResults component --> */}
        <SearchResults />
        {/* <!-- Playlist component --> */}
        <Playlist />
      </div>
    </div>
  );
}

export default App;
