import { auth, provider } from './firebase.js';
import { signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import Cookies from 'js-cookie';
import JsBarcode from 'jsbarcode';
// import { createCanvas } from 'canvas';
const db = getFirestore(); 
import {useNavigate} from 'react-router-dom'



// const generateBarcode = (userId) => {
//   const canvas = createCanvas(); 
//   JsBarcode(canvas, userId, {
//     format: "EAN13",
//     displayValue: true,
//   });
//   return canvas.toDataURL("image/png");
// };


// ======== AUTHENTICATION USER ===========
const checkUserInDatabase = async (email) => {
    const userDocRef = doc(db, 'users', email);
    const userDoc = await getDoc(userDocRef);
    return userDoc.exists();
  };


// =========== REGISTER USER ============
const registerUserInDatabase = async (user) => {
    const userDocRef = doc(db, 'users', user.email);
    await setDoc(userDocRef, {
      name: user.displayName,
      email: user.email,
      profilePicture: user.photoURL,
      registeredAt: new Date(),
      additionalData: false // Tandai bahwa user belum memasukkan data tambahan
    });
  };
  
  
  // ========== LOGIN USER ==========
const handleGoogleLogin = async (navigate) => {
    try {
      const result = await signInWithPopup(auth, provider);
      const loggedInUser = result.user;
      const isRegistered = await checkUserInDatabase(loggedInUser.email);
      Cookies.set('user', JSON.stringify(loggedInUser), { expires: 31 });

      if (!isRegistered) {
        await registerUserInDatabase(loggedInUser);
        navigate('/register/form'); 
      } else {
        navigate('/profile'); 
      }
    } catch (error) {
      console.error('Error during Google Login:', error);
    }
  };


export {checkUserInDatabase, registerUserInDatabase, handleGoogleLogin}
