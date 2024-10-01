import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { getFirestore, doc, getDoc } from 'firebase/firestore';


const userPage = () => {
  const [data , setData] = useState(null)

  const navigate = useNavigate()

  
  useEffect(() => {
    const user = Cookies.get('user');
    if (!user) {
      navigate('/login');
    } else {
      const fetchUserData = async () => {
        const db = getFirestore();
        const userDocRef = doc(db, 'users', JSON.parse(user).email);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          setData(userDoc.data());
        }
      };
      fetchUserData();
    }
  }, [navigate]);
  
  
  
  
  if (!data) {
    return <div>Loading...</div>;
  }

  
  return(
    <div>
      <h1>{data.name}</h1>
      <h1>{data.oshi}</h1>
      {
        data.profilePicture && <img src={data.profilePicture} />
      }
    </div>
    
  )
}

export default userPage