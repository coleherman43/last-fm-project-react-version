import React, { useState } from 'react';
import useLastFMData from './hooks/useLastFMData';
import TopArtists from './components/TopArtists';
import TopTracks from './components/TopTracks';
import TopAlbums from './components/TopAlbums';
import './style.css';

const App = () => {
    const [username, setUsername] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [activeTab, setActiveTab] = useState('artists');
    const [numResults, setNumResults] = useState(10); // State for number of results
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
                    {/* Dropdown to select number of results */}
                    <div>
                        <label htmlFor="numResults">Number of results: </label>
                        <select
                            id="numResults"
                            value={numResults}
                            onChange={(e) => setNumResults(Number(e.target.value))}
                        >
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                        </select>
                    </div>

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
                            <TopArtists artists={topArtists} tracks={topTracks} numResults={numResults} />
                        )}
                        {activeTab === 'tracks' && (
                            <TopTracks tracks={topTracks} numResults={numResults} />
                        )}
                        {activeTab === 'albums' && (
                            <TopAlbums albums={topAlbums} numResults={numResults} />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default App;