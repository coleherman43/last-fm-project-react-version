import React from 'react';

const TopTracks = ({ tracks }) => {
    return (
        <div>
            <h2>Top Tracks</h2>
            <ol>
                {tracks.map((track, index) => (
                    <li key={index}>{index+1}. {track.name} - {track.playcount} plays</li>
                ))}
            </ol>
        </div>
    );
};

export default TopTracks;