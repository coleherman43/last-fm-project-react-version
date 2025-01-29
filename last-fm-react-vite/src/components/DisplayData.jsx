// src/components/DisplayData.jsx
import React from 'react';

const DisplayData = ({ topArtists, topAlbums, topTracks }) => {
    return (
        <div>
            {topArtists && (
                <div>
                    <h3>Top Artists</h3>
                    <ol>
                        {topArtists.map((artist, index) => (
                            <li key={index}>{artist.name}</li>
                        ))}
                    </ol>
                </div>
            )}

            {topAlbums && (
                <div>
                    <h3>Top Albums</h3>
                    <ol>
                        {topAlbums.map((album, index) => (
                            <li key={index}>{album.name}</li>
                        ))}
                    </ol>
                </div>
            )}

            {topTracks && (
                <div>
                    <h3>Top Tracks</h3>
                    <ol>
                        {topTracks.map((track, index) => (
                            <li key={index}>{track.name}</li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    );
};

export default DisplayData;