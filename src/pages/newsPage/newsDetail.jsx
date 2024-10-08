import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Navbar from '../../component/navbar/navbar.jsx'
import Footer from '../../component/header/footer.jsx'
import {fetchNewsById} from '../../../libs/api/news.js'
import LoadingIndicator from '../../component/skeleton/loading.jsx'
const detailNews = () => {
  const [data, setData] = useState()
  const [date, setDate] = useState()
  const [time, setTime] = useState()
  const [detail, setDetail] = useState()
    const {id} = useParams()
  
  useEffect( () => {
    fetchNewsById(id).then(res => {
      setData(res)
      const [date, time] = res.PostingDate.split(" ");
      setDate(date.replaceAll('-', " "))
      setTime(time)
      setDetail(res.PostDetails.replaceAll(`\\`, ' '))
    })
  }, [data])
  return(
    <>
      <Navbar />
      {!data ? <LoadingIndicator /> : 
      <div className='p-5'>
        <div className='flex items-center justify-between mb-6'>
          <p className='bg-primary px-3 py-1 rounded-full text-white poppins-400 text-xs font-semibold'>{date}</p>
          <p className=' px-3 py-1 rounded-lg text-slate-700 poppins-400 text-xs font-semibold border-2'>{time}</p>
        </div>
        <h3 className='text-lg poppins-400 font-medium'>{data?.PostTitle}</h3>
        
        <div className='poppins-400 mt-6' dangerouslySetInnerHTML={{ __html: detail}} />
        
      </div>
      
      }
      
      <Footer />
      
    </>
  )
}

export default detailNews