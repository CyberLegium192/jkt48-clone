import React, { useState, useEffect } from 'react';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const UserMenu = ({isLoggedIn, setIsLoggedIn}) => {

  // Fungsi untuk handle logout
  const handleLogout = () => {
    Cookies.remove('user');
    setIsLoggedIn(false); 
  };

  return (
    <Menu placement="bottom-end">
      {isLoggedIn ? (
        <>
          <MenuItem>
            <Link to='/profile' className='poppins-400 uppercase'>Profile</Link>
          </MenuItem>
          <MenuItem onClick={handleLogout} className='poppins-400 uppercase'>
            Logout
          </MenuItem>
        </>
      ) : (
        <>
          <MenuItem>
            <Link to='/login' className='poppins-400 uppercase'>Login</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/register' className='poppins-400 uppercase'>Register</Link>
          </MenuItem>
        </>
      )}
    </Menu>
  );
}

export default UserMenu;
