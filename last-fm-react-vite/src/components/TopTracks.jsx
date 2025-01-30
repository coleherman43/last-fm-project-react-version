import React from 'react';
import { formatTime } from '../utils/formatTime';

const TopTracks = ({ tracks, numResults }) => {
    // Slice the tracks array to display only the selected number of results
    const displayedTracks = tracks.slice(0, numResults);

    return (
        <div>
            <h2>Top Tracks</h2>
            <ol>
                {displayedTracks.map((track, index) => {
                    const durationMs = track.duration * 1000; // Convert duration to milliseconds
                    const totalTime = durationMs * track.playcount;
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