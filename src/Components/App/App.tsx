import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import TrackType from "../../Types/TrackType";

import { getAccessToken, trackSearch } from "../../util/Spotify";
import UserType from "../../Types/UserType";
//import TrackList from "../TrackList/TrackList";

const App: React.FC = () => {
  const [userState, setUserState] = useState<UserType>({
    token: null,
    expire: 0,
  });
  const [foundSongs, setFoundSongs] = useState([
    {
      id: 1,
      name: "SongName",
      artist: "Artist Name",
      album: "Album Name",
      uri: "spotify:track:6rqhFgbbKwnb9MLmUQDhG6",
    },
    {
      id: 2,
      name: "SongName",
      artist: "Artist Name",
      album: "Album Name",
      uri: "spotify:track:6rqhFgbbKwnb9MLmUQDhG6",
    },
    {
      id: 3,
      name: "SongName",
      artist: "Artist Name",
      album: "Album Name",
      uri: "spotify:track:6rqhFgbbKwnb9MLmUQDhG6",
    },
  ]);
  const [playlist, setPlaylist] = useState({
    playlistName: "",
    tracks: [
      {
        id: 4,
        name: "SongName",
        artist: "Artist Name",
        album: "Album Name",
        uri: "spotify:track:6rqhFgbbKwnb9MLmUQDhG6",
      },
      {
        id: 5,
        name: "SongName",
        artist: "Artist Name",
        album: "Album Name",
        uri: "spotify:track:6rqhFgbbKwnb9MLmUQDhG6",
      },
      {
        id: 6,
        name: "SongName",
        artist: "Artist Name",
        album: "Album Name",
        uri: "spotify:track:6rqhFgbbKwnb9MLmUQDhG6",
      },
      {
        id: 7,
        name: "SongName",
        artist: "Artist Name",
        album: "Album Name",
        uri: "spotify:track:6rqhFgbbKwnb9MLmUQDhG6",
      },
    ],
  });

  const search = (term: string) => {
    trackSearch(term, userState, setFoundSongs);
  };

  const addTrack = (track: TrackType) => {
    const found = playlist.tracks.some((t: TrackType) => t.id === track.id);
    if (!found) {
      setPlaylist({ ...playlist, tracks: [...playlist.tracks, track] });
    } else {
      window.alert("Track already added to playlist");
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
  const savePlaylist = (playlistName: string, tracks: TrackType[]) => {
    const uris = tracks.map((t) => t.uri);
    console.log(playlistName, ":");
    console.log(uris);
  };

  useEffect(() => {
    getAccessToken(userState, setUserState);
  }, [userState]);

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
            savePlaylist={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
