import "./Track.css";

const Track = () => {
  return (
    <div className="Track">
      <div className="Track-information">
        <h3>Track name</h3>
        <p>Track Artist | Track Album</p>
      </div>
      <button className="Track-action">+/-</button>
    </div>
  );
};

export default Track;
