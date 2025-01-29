// src/hooks/useLastFMData.js
import { useState, useEffect } from 'react';
import { Search } from '../utils/search';

const API_KEY = import.meta.env.VITE_API_KEY;

const useLastFMData = (username) => {
    const [topArtists, setTopArtists] = useState([]);
    const [topAlbums, setTopAlbums] = useState([]);
    const [topTracks, setTopTracks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (username) {
            const fetchData = async () => {
                setLoading(true);
                setError(null);

                try {
                    const search = new Search(username, API_KEY);

                    const artists = await search.getTopArtists();
                    setTopArtists(artists.topartists.artist);

                    const albums = await search.getTopAlbums();
                    setTopAlbums(albums.topalbums.album);

                    const tracks = await search.getTopTracks();
                    setTopTracks(tracks.toptracks.track);
                } catch (err) {
                    setError('Error fetching user stats: ' + err.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchData();
        }
    }, [username]);

    return { topArtists, topAlbums, topTracks, loading, error };
};

export default useLastFMData;