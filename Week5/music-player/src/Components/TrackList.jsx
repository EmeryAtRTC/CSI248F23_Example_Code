import { useState } from "react";

function TrackList({ tracks, setCurrentTrack }) {
  //lets the track the id of the currenttrack
  const [selectedTrackId, setSelectedTrackId] = useState(null);

  const handleSelect = (track) => {
    //call setCurrent Track
    setCurrentTrack(track);
    //set the selectedID
    setSelectedTrackId(track.id);
  };
  return (
    <ul>
      {tracks.map((track) => {
        return (
          <li
            key={track.id}
            onClick={() => handleSelect(track)}
            className={track.id === selectedTrackId ? "selected" : ""}
          >
            {track.artist.name} - {track.title}
          </li>
        );
      })}
    </ul>
  );
}

export default TrackList;
