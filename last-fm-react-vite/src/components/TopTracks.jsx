import React from 'react';
import { formatTime } from '../utils/formatTime';

const TopTracks = ({ tracks }) => {
    return (
        <div>
            <h2>Top Tracks</h2>
            <ol>
                {tracks.map((track, index) => {
                    console.debug(
                        `Track: ${track.name}, Duration: ${track.duration}, Playcount: ${track.playcount}`
                    );
                    const totalTime = Number(track.duration) * track.playcount;
                    return (
                        <li key={index}>
                            {track.name} - {track.playcount} plays (
                            {formatTime(totalTime)} total)
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default TopTracks;