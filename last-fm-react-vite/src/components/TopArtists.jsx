import React, { useMemo } from 'react';
import { formatTime } from '../utils/formatTime';

const TopArtists = ({ artists, tracks = [] }) => {
    const artistTotalTime = useMemo(() => {
        return tracks.reduce((acc, track) => {
            const artistName = track.artist?.name || 'Unknown Artist'; // Fallback for missing artist name
            const totalTime = (track.duration || 0) * (track.playcount || 0);

            if (!acc[artistName]) {
                acc[artistName] = 0;
            }
            acc[artistName] += totalTime;
            return acc;
        }, {});
    }, [tracks]);

    return (
        <div>
            <h2>Top Artists</h2>
            <ol>
                {artists.map((artist, index) => (
                    <li key={index}>
                        {artist.name} - {artist.playcount} plays (
                        {formatTime(artistTotalTime[artist.name] || 0)} total)
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TopArtists;