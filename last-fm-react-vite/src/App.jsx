// src/App.jsx
import React, { useState } from 'react';
import useLastFMData from './hooks/useLastFMData';
import './style.css';

const App = () => {
    const [username, setUsername] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [activeTab, setActiveTab] = useState('artists'); // State to track active tab
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
                <div>
                    {/* Tab Bar */}
                    <div className="tab-bar">
                        <button
                            className={activeTab === 'artists' ? 'active' : ''}
                            onClick={() => setActiveTab('artists')}
                        >
                            Top Artists
                        </button>
                        <button
                            className={activeTab === 'tracks' ? 'active' : ''}
                            onClick={() => setActiveTab('tracks')}
                        >
                            Top Tracks
                        </button>
                        <button
                            className={activeTab === 'albums' ? 'active' : ''}
                            onClick={() => setActiveTab('albums')}
                        >
                            Top Albums
                        </button>
                    </div>

                    {/* Tab Content */}
                    <div className="tab-content">
                        {activeTab === 'artists' && (
                            <div>
                                <h2>Top Artists</h2>
                                <ol>
                                    {topArtists.map((artist, index) => (
                                        <li key={index}>{artist.name}</li>
                                    ))}
                                </ol>
                            </div>
                        )}

                        {activeTab === 'tracks' && (
                            <div>
                                <h2>Top Tracks</h2>
                                <ol>
                                    {topTracks.map((track, index) => (
                                        <li key={index}>{track.name}</li>
                                    ))}
                                </ol>
                            </div>
                        )}

                        {activeTab === 'albums' && (
                            <div>
                                <h2>Top Albums</h2>
                                <ol>
                                    {topAlbums.map((album, index) => (
                                        <li key={index}>{album.name}</li>
                                    ))}
                                </ol>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;