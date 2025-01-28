// src/hooks/useLastFMData.js
import { useState, useEffect } from 'react';

const useLastFMData = (username) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://lastfm-api-endpoint/${username}`);
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchData();
    }
  }, [username]);

  return { data, loading, error };
};

export default useLastFMData;

// Old JS Class for data fetching
class LastFM {
    constructor(username) {
      this.username = username;
    }
  
    async fetchData() {
      try {
        const response = await fetch(`https://lastfm-api-endpoint/${this.username}`);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
  
  const lastFM = new LastFM('username');
  lastFM.fetchData().then((data) => console.log(data));
  