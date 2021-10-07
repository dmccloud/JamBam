import React, { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import TrackType from "../../Types";
//import TrackList from "../TrackList/TrackList";

function App() {
  const [foundSongs, setFoundSongs] = useState([
    { id: 1, name: "SongName", artist: "Artist Name", album: "Album Name" },
    { id: 2, name: "SongName", artist: "Artist Name", album: "Album Name" },
    { id: 3, name: "SongName", artist: "Artist Name", album: "Album Name" },
  ]);
  const [playlist, setPlaylist] = useState({
    playlistName: "",
    tracks: [
      { id: 4, name: "SongName", artist: "Artist Name", album: "Album Name" },
      { id: 5, name: "SongName", artist: "Artist Name", album: "Album Name" },
      { id: 6, name: "SongName", artist: "Artist Name", album: "Album Name" },
      { id: 7, name: "SongName", artist: "Artist Name", album: "Album Name" },
    ],
  });

  const search = (term: string) => {
    console.log(term);
  };

  const addTrack = (track: TrackType) => {
    const found = playlist.tracks.some((t: TrackType) => t.id === track.id);
    if (!found) {
      setPlaylist({ ...playlist, tracks: [...playlist.tracks, track] });
    }
  };
  const removeTrack = (track: TrackType) => {
    const newList = playlist.tracks.filter((item) => {
      return item.id !== track.id;
    });
    setPlaylist({ ...playlist, tracks: newList });
  };
  const updatePlaylistName = (name: string) => {
    setPlaylist({ ...playlist, playlistName: name });
  };
  return (
    <div>
      <h1>
        Jam<span className="highlight">Bam</span>
      </h1>
      <div className="App">
        <SearchBar search={search} />
        <div className="App-playlist">
          <SearchResults foundSongs={foundSongs} addTrack={addTrack} />

          <Playlist
            playlist={playlist.tracks}
            playlistName={playlist.playlistName}
            removeTrack={removeTrack}
            updatePlaylistName={updatePlaylistName}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
