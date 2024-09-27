import Navbar from '../../component/navbar/navbar.jsx'
import Footer from '../../component/header/footer.jsx'
import GoogleIcon from '../../assets/google.svg'
import {useNavigate} from 'react-router-dom'
import {handleGoogleLogin} from '../../../libs/google-auth.js'
import {useState, useEffect} from 'react'
import Cookies from 'js-cookie';

const SignInSignUp = () => {
  const [logged, setLogged] = useState(false)
  useEffect(() => {
    const user = Cookies.get('user'); 
    if (user) {
      setLogged(true)
    } 
    if(logged){
      navigate('/profile')
    }
  }, [logged]);
  
  
  
  
  const navigate = useNavigate()
  
  return (
    <>
      <Navbar />
      <div className='flex items-center justify-center h-full w-full absolute top-0 flex-col gap-y-7'>
        <button
            className='flex items-center justify-center px-4 py-2 rounded-lg border-2 border-gray-300 shadow-md hover:shadow-lg duration-300 focus:outline-none poppins-500'
            onClick={() => handleGoogleLogin(navigate)}>  
            <img src={GoogleIcon} alt="Google Logo" className="w-8 mr-2" />
            <span>Sign in with Google</span>
          </button>
      </div>
    </>
  );
};

export default SignInSignUp;