import "./TrackList.css";
import TrackType from "../../Types";
import Track from "../Track/Track";

interface TrackListProps {
  data: TrackType[];
  isRemoval: boolean;
  addRemoveTrack: (track: TrackType) => void;
}
const TrackList = (TrackListProps: TrackListProps) => {
  const tracks = TrackListProps.data;
  return (
    <div className="TrackList">
      {tracks.map((track) => {
        return (
          <Track
            isRemoval={TrackListProps.isRemoval}
            key={track.id}
            track={track}
            addRemoveTrack={TrackListProps.addRemoveTrack}
          />
        );
      })}
    </div>
  );
};

export default TrackList;
