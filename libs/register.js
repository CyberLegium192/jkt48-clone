import { getFirestore, doc, updateDoc } from 'firebase/firestore';
const db = getFirestore();


const handleSubmit = async () => {
    e.preventDefault();
    const user = JSON.parse(Cookies.get('user'));
    const userDocRef = doc(db, 'users', user.email);
    await updateDoc(userDocRef, {
      birthdate: birthdate,
      oshi: oshi,
      address: address,
      additionalData: true 
    });

    alert('Data berhasil disimpan');
    // navigate('/');
  };
  
export {handleSubmit};