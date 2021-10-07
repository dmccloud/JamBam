import "./Playlist.css";
import TrackList from "../TrackList/TrackList";
const Playlist = () => {
  return (
    <div className="Playlist">
      <input value="New Playlist" />
      <TrackList />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
