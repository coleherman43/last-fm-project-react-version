// src/App.jsx
import React, { useState, useEffect } from 'react';

const App = () => {
  const [username, setUsername] = useState('');
  const [scrobbles, setScrobbles] = useState([]);
  const [artists, setArtists] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [tracks, setTracks] = useState([]);

  // Example of how you might load data (replace with your actual data fetching logic)
  useEffect(() => {
    // Fetch the data here, set the state, etc.
    // This is a placeholder for your API calls.
    setUsername('User123');
    setScrobbles([/* Your data here */]);
    setArtists([/* Your data here */]);
    setAlbums([/* Your data here */]);
    setTracks([/* Your data here */]);
  }, []);

  return (
    <div>
      <h1>Last FM Data Retriever</h1>

      <div id="username">{username}</div>
      <div id="scrobbles">{scrobbles.join(', ')}</div>

      <div className="results">
        <div className="column" id="artists">
          <h2>Artists</h2>
          {artists.map((artist, index) => (
            <p key={index}>{artist}</p>
          ))}
        </div>
        <div className="column" id="albums">
          <h2>Albums</h2>
          {albums.map((album, index) => (
            <p key={index}>{album}</p>
          ))}
        </div>
        <div className="column" id="tracks">
          <h2>Tracks</h2>
          {tracks.map((track, index) => (
            <p key={index}>{track}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
