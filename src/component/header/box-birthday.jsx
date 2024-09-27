import CardMember from '../card/member-card.jsx'
import Curve from '../../assets/decoration/curveWhite.svg'
import DottedWhite from '../../assets/decoration/dotWhite.svg'
import Circle from '../../assets/decoration/circle.svg'
import {fetchMembers} from '../../../libs/api/member.js'
import { useState, useEffect } from 'react'

const boxBirthday = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetchMembers().then(res => setData(res))
  }, []);
  
  
  return(
    <div className='py-7 pb-14 px-5 relative bg-primary-80 rounded-lg overflow-hidden'>
      
        <div className='flex flex-col px-5'>
          <h1 className='text-white uppercase text-[22px] poppins-500 font-bold tracking-widest inline-block rounded-r-full rounded-tl-full px-3'>BIRTHDAY</h1>
          <div className='mb-3 text-white poppins-500 font-semibold text-sm inline-block  rounded-b-2xl px-3 opacity-90 italic'>
              <p>18 September</p>
          </div>
        </div>
        
        {/* DECORATION AREA */}
        <div className='w-full h-full'>
        <img src={Curve} className='absolute w-56 z-10 opacity-30 rotate-45 -right-24 -bottom-24' alt='decoration'/>
        <img src={DottedWhite} className='absolute w-12 -left-5 z-20 top-10 rotate-45 rotateAnimation ' alt='decoration'/>
        <img src={DottedWhite} className='absolute w-12 right-6 z-20 bottom-0 rotate-45 rotateAnimation ' alt='decoration'/>
        <img src={Circle} className='absolute w-10 right-3 slide-animation z-20 bottom-12 rotate-45 ' alt='decoration'/>
        <img src={Circle} className='absolute w-10 right-3 slide-animation z-20 bottom-16 rotate-45 ' alt='decoration'/>
        </div>
        
        
      
      
      <div className='grid grid-cols-3 gap-x-2 w-full'>
        {data?.slice(0, 3).map(item => <CardMember item={item} key={item.id} />)} 
      </div>
      
      
      
    </div>
  )
}
export default boxBirthday