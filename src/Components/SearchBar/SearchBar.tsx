import { useState } from "react";
import "./SearchBar.css";
interface SearchBarProps {
  search: (term: string) => void;
}
const SearchBar = (SearchBarProps: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { search } = SearchBarProps;

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    search(searchTerm);
  };
  return (
    <form
      onSubmit={(e) => {
        onFormSubmit(e);
      }}
    >
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <button
          type="submit"
          className="SearchButton"
          // onClick={() => search(searchTerm)}
          //onSubmit={() => search(searchTerm)}
        >
          SEARCH
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
