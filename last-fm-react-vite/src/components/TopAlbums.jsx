import React from 'react';

const TopAlbums = ({ albums }) => {
    return (
        <div>
            <h2>Top Albums</h2>
            <ol>
                {albums.map((album, index) => (
                    <li key={index}>{index+1}. {album.name} - {album.playcount} plays</li>
                ))}
            </ol>
        </div>
    );
};

export default TopAlbums;