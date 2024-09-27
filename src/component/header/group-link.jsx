import {Link} from 'react-router-dom'
import {groupData} from '../../../libs/data.js'


const groupLink = () =>{
  return(
    <div className='px-6 pb-7 pt-4'>
      <h1 className='text-primary text-2xl poppins-500 font-bold tracking-widest text-center'>48 GROUP</h1>
      
      <div className='flex items-center justify-between flex-wrap mt-5 gap-y-3'>
        {groupData.map((item, i) => (
          <Link to={item.link} key={i}>
            <img src={`${item.poster}`} className='object-cover' width='64' alt={item.alt} height='96'/>  
          </Link>
        ))}
      </div>
    </div>
  )
}
export default groupLink