import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import DialogTitle from '@mui/joy/DialogTitle';
import ModalClose from '@mui/joy/ModalClose';
// IMPORT COMPONENT
import Logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import { IoClose } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa";
import BlackCurve from '../../assets/decoration/blackCurve.svg'
import DottedRed from '../../assets/decoration/dotRed.svg'
import DottedWhite from '../../assets/decoration/dotWhite.svg'
import Circle from '../../assets/decoration/circle.svg'
import Triangle from '../../assets/decoration/triangle.svg'
import WhiteCurve from '../../assets/decoration/curveWhite.svg'



const menuList = ({open, setOpen}) => {
  return(
    <>
      <Box sx={{ display: "flex" }}>
        <Drawer open={open} onClose={() => setOpen(false)} size='lg'>
          
          {/* HEADER MENU LIST  */}
          <div className='bg-primary p-3 px-5 flex items-center'>
            
            <button type='button' aria-label='close navbar menu' className='hover:cursor-pointer'
              onClick={() => setOpen(false)} >
              <IoClose className='text-white' size={36}/>
            </button>
            
            <img src={Logo} alt="JKT48 LOGO" className='mx-auto' width='48'/>  
            
          </div>
          
          {/*  MENU LIST  */}
          <ul className='p-4 bg-primary grid grid-cols-2 gap-x-16 justify-between px-8 pt-20 gap-y-8 pb-20 relative rounded-b-3xl relative'>
            <li className='block w-full z-20'>
              <Link className='text-white flex items-center justify-center gap-x-4 items-center text-lg py-1 rounded-full poppins-500 tracking-widest overflow-hidden uppercase relative block border-b-2 border-b-white w-full
                menuList hover:text-primary
                ' to='/news'>
                News
              </Link>
            </li>
            <li className='block w-full z-20'>
              <Link className='text-white flex items-center justify-center gap-x-4 items-center text-lg py-1 rounded-full poppins-500 tracking-widest overflow-hidden uppercase relative block border-b-2 border-b-white w-full
                menuList hover:text-primary
                ' to='/member'>
                member
              </Link>
            </li>
            <li className='block w-full z-20'>
              <Link className='text-white flex items-center justify-center gap-x-4 items-center text-lg py-1 rounded-full poppins-500 tracking-widest overflow-hidden uppercase relative block border-b-2 border-b-white w-full
                menuList hover:text-primary
                ' to='/schedule'>
                schedule
              </Link>
            </li>
            <li className='block w-full z-20'>
              <Link className='text-white flex items-center justify-center gap-x-4 items-center text-lg py-1 rounded-full poppins-500 tracking-widest overflow-hidden uppercase relative block border-b-2 border-b-white w-full
                menuList hover:text-primary
                ' to='/theater'>
                theater
              </Link>
            </li>
            <li className='block w-full z-20'>
              <Link className='text-white flex items-center justify-center gap-x-4 items-center text-lg py-1 rounded-full poppins-500 tracking-widest overflow-hidden uppercase relative block border-b-2 border-b-white w-full
                menuList hover:text-primary
                ' to='/store'>
                store
              </Link>
            </li>
            <li className='block w-full z-20'>
              <Link className='text-white flex items-center justify-center gap-x-4 items-center text-lg py-1 rounded-full poppins-500 tracking-widest overflow-hidden uppercase relative block border-b-2 border-b-white w-full
                menuList hover:text-primary
                ' to='/tiket'>
                tiket
              </Link>
            </li>
            
            <img src={WhiteCurve} alt='curve' className='absolute z-10 opacity-[32%] w-56 rotate-[30deg] top-12 -left-32 select-none' alt='decoration'/>
            <img src={DottedWhite} alt='curve' className='absolute z-10 w-10 rotate-[30deg] top-28 select-none' alt='decoration'/>
            <img src={Circle} alt='curve' className='absolute z-10 w-8 top-48 select-none' alt='decoration'/>
          </ul>
          
        {/*  FUNCLUB  */}
        <div className='relative pt-12 px-8 relative overflow-hidden h-full'>
          <div className='flex items-center justify-center gap-y-9 flex-col'>
            <h3 className='mx-auto block text-xl tracking-widest poppins-500 font-semibold py-1 px-12 border-2 border-primary rounded-full text-primary'>FUNCLUB
            </h3>
            
          </div>
          
            <ul className='w-full flex flex-wrap gap-x-5 gap-y-7 justify-between mt-12'>
              <li className=' z-20'>
                <Link className='text-primary flex items-center justify-center gap-x-4 items-center text-lg py-1 rounded-xl poppins-500 tracking-widest overflow-hidden uppercase relative block px-2 w-full
                  menuListFunclub hover:text-white capitalize
                  ' to='https://jkt48.com/fanclub?lang=id'>
                  about funclub
                </Link>
              </li>
              <li className=' z-20'>
                <Link className='text-primary flex items-center justify-center gap-x-4 items-center text-lg py-1 rounded-xl poppins-500 tracking-widest overflow-hidden uppercase relative block px-2 w-full
                  menuListFunclub hover:text-white capitalize
                  ' to=''>
                  blog member
                </Link>
              </li>
              <li className=' z-20'>
                <Link className='text-primary flex items-center justify-center gap-x-4 items-center text-lg py-1 rounded-xl poppins-500 tracking-widest overflow-hidden uppercase relative block px-2 w-full
                  menuListFunclub hover:text-white capitalize
                  ' to=''>
                  galery
                </Link>
              </li>
              <li className=' z-20'>
                <Link className='text-primary flex items-center justify-center gap-x-4 items-center text-lg py-1 rounded-xl poppins-500 tracking-widest overflow-hidden uppercase relative block px-2 w-full
                  menuListFunclub hover:text-white capitalize
                  ' to=''>
                  kuis
                </Link>
              </li>
            </ul>
            
            <img src={BlackCurve} alt='curve' className='absolute -bottom-20 -right-16 rotate-[280deg] -z-10 opacity-[5%] ' alt='decoration'/>
            <img src={DottedRed} alt='curve' className='absolute w-12  rotate-[280deg] -z-10 right-12 bottom-1 rotateAnimation' alt='decoration'/>
            <img src={DottedRed} alt='curve' className='absolute w-14 rotate-[200deg] -left-7 -z-10  top-20 rotateAnimation' alt='decoration'/>
            <img src={Triangle} alt='curve' className='absolute w-10 rotate-[-20deg] -z-10 right-6 bottom-[4em]' alt='decoration'/>
            
            
            
        </div>
        
        
        
        </Drawer>
      </Box>
    </>
  )
}

export default menuList