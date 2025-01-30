import React from 'react';
import { formatTime } from '../utils/formatTime';

const TopAlbums = ({ albums, numResults }) => {
    // Slice the albums array to display only the selected number of results
    const displayedAlbums = albums.slice(0, numResults);

    return (
        <div>
            <h2>Top Albums</h2>
            <ol>
                {displayedAlbums.map((album, index) => {
                    const totalTime = (album.duration || 0) * (album.playcount || 0);
                    return (
                        <li key={index}>
                            {album.name} - {album.playcount} plays (
                            {formatTime(totalTime)} total)
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default TopAlbums;