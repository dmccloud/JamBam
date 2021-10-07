import "./Playlist.css";
import TrackList from "../TrackList/TrackList";
import TrackType from "../../Types";

interface PlaylistProps {
  playlist: TrackType[];
  playlistName: string;
  removeTrack: (track: TrackType) => void;
  updatePlaylistName: (name: string) => void;
}
const Playlist = (PlaylistProps: PlaylistProps) => {
  const data = PlaylistProps.playlist;
  return (
    <div className="Playlist">
      <input
        placeholder="New Playlist"
        defaultValue="New PLaylist"
        value={PlaylistProps.playlistName}
        onChange={(e) => {
          PlaylistProps.updatePlaylistName(e.target.value);
        }}
      />
      <TrackList
        addRemoveTrack={PlaylistProps.removeTrack}
        data={data}
        isRemoval={true}
      />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
};

export default Playlist;
