import React from 'react';

const TopAlbums = ({ albums }) => {
    return (
        <div>
            <h2>Top Albums</h2>
            <ol>
                {albums.map((album, index) => (
                    <li key={index}>{album.name}</li>
                ))}
            </ol>
        </div>
    );
};

export default TopAlbums;