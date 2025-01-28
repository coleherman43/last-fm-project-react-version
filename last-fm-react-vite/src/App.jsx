// Example in App.jsx with a list of artists
import React, { useState, useEffect } from 'react';

import { parseData } from './utils/parseData';

// In your data fetching hook
const result = parseData(rawData);


const App = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchArtists = async () => {
      const response = await fetch('https://api.last.fm/artists');
      const data = await response.json();
      setArtists(data.artists);
      setLoading(false);
    };

    fetchArtists();
  }, []);

  return (
    <div>
      <h1>Artists</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {artists.map((artist) => (
            <li key={artist.id}>{artist.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
