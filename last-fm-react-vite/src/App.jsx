// src/App.jsx
import React, { useState } from 'react';
import useLastFMData from './hooks/useLastFMData';
import DisplayData from './components/DisplayData';
import './style.css';

const App = () => {
    const [username, setUsername] = useState('');
    const [inputValue, setInputValue] = useState('');
    const { topArtists, topAlbums, topTracks, loading, error } = useLastFMData(username);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setUsername(inputValue);
        } else {
            alert('Please enter a valid username.');
        }
    };

    return (
        <div>
            <h1>Last.fm Stats</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your Last.fm username"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Loading...' : 'Get Stats'}
                </button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            {username && (
                <DisplayData
                    topArtists={topArtists}
                    topAlbums={topAlbums}
                    topTracks={topTracks}
                />
            )}
        </div>
    );
};

export default App;