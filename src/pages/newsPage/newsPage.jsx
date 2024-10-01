import Navbar from '../../component/navbar/navbar.jsx'
import Footer from '../../component/header/footer.jsx'
import CardNews from '../../component/card/news-card.jsx'
import Dotted from '../../assets/decoration/dotRed.svg'
import Curve from '../../assets/decoration/blackCurve.svg'
import Triangle from '../../assets/decoration/triangle.svg'
import { fetchNews } from '../../../libs/api/news.js'
import { useEffect, useState } from 'react'
import NewsCardSkeletons from '../../component/skeleton/news-card-skeleton.jsx'

const newsPage = () => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true);
  
  // EFFECT UNTUK FECTHING DATA
  useEffect(() => {
     fetchNews()
     .then(res => {
       setData(res)
       setLoading(false)
     })
     .catch(error => {
        console.error(error);
        setLoading(false);
      });
   }, [])
  // UNUTK PERUBAHAN PADA DATA 
  
  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]); 
  
  // SKELETONS ANIMATION 
  const Skeletons = () => {
    if (loading) {
      return (
        <>
          {Array(8).fill(null).map((_, index) => (
            <NewsCardSkeletons key={index} />
          ))}
        </>
      )
    } else {
      return data?.map((item, i) => <CardNews item={item} key={i}/>)
    }
  }
  
  
  return(
    <>
      <Navbar />
      <div className='px-5 pt-7 relative pb-28 overflow-hidden'>
        <h3 className='text-3xl font-semibold poppins-500 tracking-widest text-primary'>NEWS</h3>
        
        <div className='flex flex-col gap-y-12 mt-9'>
          {<Skeletons/>}
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

export default newsPage