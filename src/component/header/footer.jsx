import {Link} from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaYoutube,FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const footerMenu =[
  {'title' : 'news', 'link' : 'https://jkt48.com/news/list?lang=id'},
  {'title' : 'member', 'link' : 'https://jkt48.com/member/list?lang=id'},
  {'title' : 'apa itu JKT48?', 'link' : 'https://jkt48.com/about/jkt48?lang=id'},
  {'title' : 'apa itu AKB48?', 'link' : 'https://jkt48.com/about/akb48?lang=id'},
  {'title' : 'pengenalan produser', 'link' : 'https://jkt48.com/about/producer?lang=id'},
  {'title' : 'kontak', 'link' : 'info@jkt48.com'},
  {'title' : 'syarat dan ketentuan', 'link' : 'https://jkt48.com/rules?lang=id'}
]

const footer = () => {
  return(
    <div className='bg-dark-footer px-6 pb-5 pt-9 mb-0'>
      <h3 className='text-primary poppins-500 text-3xl font-normal tracking-widest'>JKT48 OFFICIAL SITE</h3>
      
      <ul className='flex gap-x-6 mt-4 text-white'>
        <li>
          <Link to='https://www.facebook.com/official.JKT48' aria-label="Kunjungi halaman Facebook resmi JKT48">
            <FaFacebookF size={20}/>
          </Link>
        </li>
        <li>
          <Link to='https://twitter.com/officialjkt48' aria-label="Kunjungi halaman X resmi JKT48">
            <FaXTwitter size={20}/>
          </Link>
        </li>
        <li>
          <Link to='https://www.instagram.com/jkt48' aria-label='Kunjungi halaman instagram resmi JKT48'>
            <FaInstagram size={20}/>
          </Link>
        </li>
        <li>
          <Link to='https://www.youtube.com/user/JKT48' aria-label="Kunjungi halaman youtube resmi JKT48">
            <FaYoutube size={20}/>
          </Link>
        </li>
        <li>
          <Link to='https://www.tiktok.com/@jkt48.official' aria-label="Kunjungi halaman tiktok resmi JKT48">
            <FaTiktok size={20}/>
          </Link>
        </li>
      </ul>
      
      <ul className='flex justify-between flex-wrap my-16 gap-y-5 capitalize px-1'>
        {footerMenu.map((item, i) => 
        <li key={i}>
          <Link to={item.link} className='text-white poppins-400 text-sm hover:text-primary duration-300' aria-label={item.title}>
            {item.title}
          </Link>
        </li>
        )}
      </ul>
      
      <span className='text-xs poppins-400 font-normal text-gray-300 text-center inline-block'>Copyright © 2024 JKT48 Operation Team (PT. Indonesia Musik Nusantara) All Rights Reserved</span>
    </div>
  )
}





export default footer