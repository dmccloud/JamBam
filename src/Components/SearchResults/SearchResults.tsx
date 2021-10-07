import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";
import TrackType from "../../Types";

interface SearchResultsProps {
  foundSongs: TrackType[];
  addTrack: (track: TrackType) => void;
}

const SearchResults = (SearchResultsProps: SearchResultsProps) => {
  const data = SearchResultsProps.foundSongs;
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList
        data={data}
        addRemoveTrack={SearchResultsProps.addTrack}
        isRemoval={false}
      />
    </div>
  );
};

export default SearchResults;
