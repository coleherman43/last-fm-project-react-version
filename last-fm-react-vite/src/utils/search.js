// utils/search.js
const API_KEY = import.meta.env.VITE_API_KEY;

export class Search {
    constructor(user, apiKey) {
        this.user = user;
        this.apiKey = apiKey;
        this.baseUrl = 'http://ws.audioscrobbler.com/2.0/';
    }

    async fetchStats(method, additionalParams = {}) {
        const url = new URL(this.baseUrl);
        url.searchParams.append('method', method);
        url.searchParams.append('user', this.user);
        url.searchParams.append('api_key', this.apiKey);
        url.searchParams.append('format', 'json');

        for (const [key, value] of Object.entries(additionalParams)) {
            url.searchParams.append(key, value);
        }

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }

    async getTopArtists() {
        return this.fetchStats('user.getTopArtists');
    }

    async getTopAlbums() {
        return this.fetchStats('user.getTopAlbums');
    }

    async getTopTracks() {
        return this.fetchStats('user.getTopTracks');
    }
}