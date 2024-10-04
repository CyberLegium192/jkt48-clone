import axios from 'axios'

export const fetchSchedule = async () => {
    const response = await axios.get(`${import.meta.env.VITE_API_URL_SCHEDULE}/schedule.json`);
    const data = response.data
    const scheduleArray = Object.keys(data).map((key) => {
      return {
        ...data[key],
        firebaseId: key
      };
    });
    return scheduleArray
  };