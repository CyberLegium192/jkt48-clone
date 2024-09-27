import { GoDotFill } from "react-icons/go";
import {Link} from 'react-router-dom'
import CardSchedule from '../card/schedule-card.jsx'
import {scheduleData} from '../../../libs/data.js'


const boxSchedule = () => {
  return(
    <>
      <div className='px-5 mt-4 mb-12' >
        
        <div className='flex justify-between items-center mb-9'>
          
          <h1 className='text-primary text-xl poppins-500 font-bold tracking-widest'>SCHEDULE</h1>
          
          <Link className='flex items-center poppins-400 font-semibold italic text-sm gap-x-1 hover:opacity-60 duration-300' to='/schedule'>
            <GoDotFill className='text-primary'  size={18}/>
            View all
          </Link>

        </div>
        
        <div className='grid grid-cols-2 gap-x-3 gap-y-6'>
          {scheduleData.slice(-4).map(item => <CardSchedule item={item} key={item.id}/>)}
          
        </div>
        
        
      </div>
    </>
  )
}
export default boxSchedule




