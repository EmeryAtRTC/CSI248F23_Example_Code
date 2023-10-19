import SearchBar from "./Components/SearchBar";
import TrackList from "./Components/TrackList";
import Player from "./Components/Player";
import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const searchTracks = async (searchValue) => {
    const options = {
      method: "GET",
      url: "https://deezerdevs-deezer.p.rapidapi.com/search",
      params: { q: searchValue },
      headers: {
        "X-RapidAPI-Key": "PUT YOUR API KEY HERE THAT YOU GET FROM RAPIDAPI",
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      //we need to set a state
      console.log(response.data.data);
      setTracks(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="App">
      <SearchBar onSearch={searchTracks} />
      <TrackList tracks={tracks} setCurrentTrack={setCurrentTrack} />
      <Player track={currentTrack} />
    </div>
  );
}

export default App;
