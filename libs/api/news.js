import axios from 'axios'


export const fetchNews = async () => {
    const response = await axios.get('http://api.evognito.my.id/JKT48/jsonNews');
    return response
  };