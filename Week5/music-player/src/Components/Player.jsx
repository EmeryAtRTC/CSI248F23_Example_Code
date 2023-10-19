function Player({ track }) {
  if (!track) {
    return <h2>Please select a track:</h2>;
  }
  return (
    <div>
      <h3>Now Playing:</h3>
      <img src={track.album.cover_big} alt="" />
      <img src={track.artist.picture_big} alt="" />

      <p>
        {track.artist.name} - {track.title}
      </p>
      <audio controls src={track.preview}></audio>
    </div>
  );
}

export default Player;
