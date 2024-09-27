import axios from 'axios'


export const fetchMembers = async () => {
    const response = await axios.get('https://jkt48-c9e60-default-rtdb.firebaseio.com/member.json');
    // const data = await response.json();
    const data = response.data
    const membersArray = Object.keys(data).map((key) => {
      return {
        ...data[key],
        firebaseId: key // Tambahkan kunci unik Firebase ke objek data
      };
    });
    return membersArray
  };