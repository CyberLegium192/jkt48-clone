import { GoDotFill } from "react-icons/go";
import {Link} from 'react-router-dom'
import CardNews from '../card/news-card.jsx'
import {newsData} from '../../../libs/data.js'

const boxNews  = () => {
  return(
    <>
      <div className='px-5 mt-4 mb-12' >
        
        <div className='flex justify-between items-center mb-9'>
          
          <h1 className='text-primary text-xl poppins-500 font-bold tracking-widest'>NEWS</h1>
          
          <Link to='/news' className='flex items-center text-sm poppins-400 font-semibold italic gap-x-1 hover:opacity-60 duration-300'>
            <GoDotFill className='text-primary'  size={18}/>
            View all
          </Link>

        </div>
        
        <div className='flex flex-col gap-y-6'>
          {newsData.slice(-3).map(item => <CardNews item={item} key={item.id}/>)}
          
        </div>
        
        
      </div>
    </>
  )
}
export default boxNews




