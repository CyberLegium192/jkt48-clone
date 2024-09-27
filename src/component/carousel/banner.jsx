import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import {Link} from 'react-router-dom'
import {bannerData} from '../../../libs/data.js'

const banner = () => {
  return(
    <div className='w-full p-3'>
      <Swiper
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2900,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}>
        {bannerData.map((item, i) => (
          <SwiperSlide key={i}>
            <Link className='w-full h-60 inline-block rounded-lg overflow-hidden
              ' to={item.link}>
              <img src={item.cover} alt={item.alt} className='object-cover' width="100%" height='100%'/>
            </Link>
          </SwiperSlide>
        
          )
        )}
          
        </Swiper>
      
    </div>
    
    
    
    
  )
}


export default banner