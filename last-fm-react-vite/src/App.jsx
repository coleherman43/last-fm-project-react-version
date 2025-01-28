// App.jsx
import React, { useState, useEffect } from 'react';
import { Search } from './utils/search';
import DisplayData from './components/DisplayData';
import './style.css';

const API_KEY = import.meta.env.VITE_API_KEY;

const App = () => {
    const [username, setUsername] = useState('');
    const [topArtists, setTopArtists] = useState([]);
    const [topAlbums, setTopAlbums] = useState([]);
    const [topTracks, setTopTracks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const promptUsername = () => {
        const inputUsername = prompt("Please enter your Last.fm username:");
        if (inputUsername) {
            setUsername(inputUsername);
        } else {
            setError("Username is required.");
        }
    };

    useEffect(() => {
        if (username) {
            const loadUserStats = async () => {
                setLoading(true);
                setError(null);

                try {
                    const search = new Search(username, API_KEY);

                    const artists = await search.getTopArtists();
                    setTopArtists(artists.topartists.artist);

                    const albums = await search.getTopAlbums();
                    setTopAlbums(albums.topalbums.album);

                    const tracks = await search.getTopTracks();
                    setTopTracks(tracks.toptracks.track);
                } catch (err) {
                    setError('Error fetching user stats: ' + err.message);
                } finally {
                    setLoading(false);
                }
            };

            loadUserStats();
        }
    }, [username]);

    useEffect(() => {
        promptUsername();
    }, []);

    return (
        <div>
            <h1>Last.fm Stats for {username}</h1>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <DisplayData
                topArtists={topArtists}
                topAlbums={topAlbums}
                topTracks={topTracks}
            />
        </div>
    );
};

export default App;