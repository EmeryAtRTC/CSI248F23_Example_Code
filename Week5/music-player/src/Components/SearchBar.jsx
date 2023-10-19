import { useState } from "react";

function SearchBar({ onSearch }) {
  //lets track what the user is searching for with state
  const [searchValue, setSearchValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchValue);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
          placeholder="Search for a track..."
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default SearchBar;
