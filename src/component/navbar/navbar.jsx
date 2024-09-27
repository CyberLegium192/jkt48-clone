import React, { useState, useEffect } from 'react';
import Button from '@mui/joy/Button';
import MenuButton from '@mui/joy/MenuButton';
import Dropdown from '@mui/joy/Dropdown';
// ICON IMPORT
import { CgMenuLeftAlt } from "react-icons/cg";
import { FaUser } from "react-icons/fa6";
import {Link} from 'react-router-dom'
import Logo from '../../assets/logo.png'

import MenuList from './menuList.jsx'
import UserMenu from './userMenu.jsx'
import Cookies from 'js-cookie';



const navbar = () => {
  const [open, setOpen] = useState(false);
  const [userData, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  
  useEffect(() => {
  const user = Cookies.get('user'); 
  if (user) {
    const parsedUser = JSON.parse(user);

    if (!userData || userData.email !== parsedUser.email) {
      setUser(parsedUser);
      setIsLoggedIn(true);
    }
  } else {
    setIsLoggedIn(false);
    setUser(null);
  }
}, []);

  useEffect(() => {
  const intervalId = setInterval(() => {
    const user = Cookies.get('user');
    if (user) {
      const parsedUser = JSON.parse(user);

      if (!userData || userData.email !== parsedUser.email) {
        setUser(parsedUser);
        setIsLoggedIn(true);
      }
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  }, 1000);

  return () => clearInterval(intervalId);
}, [userData]);
  
  const UserPicture = () => {
    return(
      <>
        {
          userData ? (
          <img src={userData.photoURL} alt='user picture' className='w-9 h-9 object-cover rounded-full border-2 border-white -z-10' />
          ) : <FaUser className='text-white' size={26} />
        }
      </>
    )
  }
  
  
  
  
    return (
        <>
          <div className='bg-primary w-full p-3 flex justify-between items-center sticky top-0 left-0 z-50'>
            <button type='button' aria-label='buka menu dari navbar' className='hover:cursor-pointer'
              onClick={() => setOpen(true)} >
              <CgMenuLeftAlt className='text-white' size={36}/>
            </button>
            
            <Link to='/'>
              <img src={Logo} alt="JKT48 LOGO" className='fixed top-2 object-cover' width='44' height='44'/>
            </Link>
            
            
            <Dropdown>
              <MenuButton size='sm' 
                variant= 'plain'
                color= 'transparent' 
                type='button'
                aria-label="Buka profil pengguna"
                >
                {<UserPicture />}
              </MenuButton> 
              <UserMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            </Dropdown>
            
          </div>
          {/*OUT NAVBAR*/}
          <MenuList open={open} setOpen={setOpen}/>
            
        </>
    );
};
export default navbar;
