import TrackType from "../../Types/TrackType";
import "./Track.css";
interface TrackProps {
  track: TrackType;
  addRemoveTrack: (track: TrackType) => void;
  isRemoval: boolean;
}
const Track = (TrackProps: TrackProps) => {
  const { track, addRemoveTrack, isRemoval } = TrackProps;
  console.log(`track: `, track);
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      <button
        className="Track-action"
        onClick={() => {
          addRemoveTrack(track);
        }}
      >
        {!isRemoval ? "+" : "-"}
      </button>
    </div>
  );
};

export default Track;
