import {useState, useEffect} from 'react'
import Navbar from '../../component/navbar/navbar.jsx'
import Footer from '../../component/header/footer.jsx'
import CardSchedule from '../../component/card/schedule-card.jsx'
import Dotted from '../../assets/decoration/dotRed.svg'
import Curve from '../../assets/decoration/blackCurve.svg'
import Triangle from '../../assets/decoration/triangle.svg'
import {fetchSchedule} from '../../../libs/api/schedule.js'



const SchedulePage = () => {
  const [data, setData] = useState()
  
  
  useEffect(() => {
    fetchSchedule()
    .then(res => setData(res))
  }, [])
  
  
  
  
  
  
  return(
    <>
      <Navbar />
      <div className='px-5 pt-7 relative pb-28 overflow-hidden'>
        <h3 className='text-3xl font-semibold poppins-500 tracking-widest text-primary'>SCHEDULE</h3>
        
        <div className='grid grid-cols-2 gap-x-3 gap-y-6 mt-7'>
          {data?.map(item => <CardSchedule item={item} key={item.id}/>)}
        </div>
        
        
        {/*DECORATION*/}
        <img src={Dotted} className='absolute top-6 -z-10 w-10 -right-3 rotateAnimation' alt='decoration'/>
        <img src={Dotted} className='absolute top-[50%] -z-10 w-16 -left-10 opacity-40 rotateAnimation' alt='decoration'/>
        <img src={Curve} className='absolute -z-10 w-52 rotate-[-10deg] -bottom-16 -left-16 opacity-10' alt='decoration'/>
        <img src={Dotted} className='absolute bottom-5 -z-10 w-10 left-8 opacity-70 rotateAnimation' alt='decoration'/>
        <img src={Triangle} className='absolute slide-animation2 -z-10 w-10 opacity-70 ' alt='decoration'/>
      </div>
      <Footer />
    </>
  )
}

export default SchedulePage