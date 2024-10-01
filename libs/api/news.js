import axios from 'axios'


export const fetchNews = async () => {
    const response = await axios.get('https://jkt48-api-seven.vercel.app/api/news');
    return response.data
  };