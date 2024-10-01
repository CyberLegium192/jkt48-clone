import { GoDotFill } from "react-icons/go";
import {Link} from 'react-router-dom'
import CardNews from '../card/news-card.jsx'
import {fetchNews} from '../../../libs/api/news.js'
import { useEffect, useState } from 'react'

import NewsCardSkeletons from '../skeleton/news-card-skeleton.jsx'


const boxNews  = () => {
  const [data, setData] = useState()
  
  useEffect(() => {
     fetchNews().then(res => setData(res))
   }, [])
  
  
  
  const Skeletons = () => {
    if(!data){
      return <NewsCardSkeletons />
    } else{
      return data?.slice(0, 2).map(item => <CardNews item={item} key={item.id}/>)
    }
  }
  
  
  
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
        
        <div className='flex flex-col gap-y-8'>
          {/*data?.slice(0, 2).map(item => <CardNews item={item} key={item.id}/>) */ }
          
          <Skeletons />
          {/*<NewsCardSkeletons />*/}
        </div>
        
        
      </div>
    </>
  )
}
export default boxNews




