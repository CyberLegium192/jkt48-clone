import axios from 'axios'


export const fetchNews = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL_NEWS}/news`);
    return response.data
  };