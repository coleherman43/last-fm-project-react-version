import React from 'react';

const TopArtists = ({ artists }) => {
    return (
        <div>
            <h2>Top Artists</h2>
            <ol>
                {artists.map((artist, index) => (
                    <li key={index}>{artist.name}</li>
                ))}
            </ol>
        </div>
    );
};

export default TopArtists;