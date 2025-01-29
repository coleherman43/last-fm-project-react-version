import React from 'react';

const TopTracks = ({ tracks }) => {
    return (
        <div>
            <h2>Top Tracks</h2>
            <ol>
                {tracks.map((track, index) => (
                    <li key={index}>{track.name}</li>
                ))}
            </ol>
        </div>
    );
};

export default TopTracks;