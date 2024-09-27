import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { useState } from 'react';

const api =[
  {
    'link': 'PYeXC8aMBaw',
  },
  {
    'link': 'XKyDUkDsd9I',
  },
  {
    'link': 'ialsxbmz_jo',
  },
  {
    'link': 'mroU8dfVlP0',
  },
];




const VideoSlide = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleVideoClick = (id) => {
    setActiveVideo(id);
  };
  
  return(
    <div className='px-4 py-8 mt-9'>
      <div className='relative px-5 border-2 border-primary rounded-xl pt-9'>
        <div className='absolute -top-5 flex items-center justify-center w-full left-0'>
          <h2 className='bg-primary text-xl text-white inline-block poppins-500 uppercase px-6 py-1 rounded-full'>Video</h2>
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          pagination={{ clickable: true }}
          navigation={{ clickable: true }}
          modules={[Pagination, Navigation]}
          className="pb-8"
        >
          {api.map((item, index) => (
            <SwiperSlide key={index} className='rounded-xl overflow-hidden'>
              {activeVideo === item.link ? (
                <iframe 
                  className='w-full h-56' 
                  src={`https://www.youtube.com/embed/${item.link}?&theme=dark&autohide=2&autoplay=1`} 
                  frameBorder="0" 
                  allow="autoplay; encrypted-media" 
                  allowFullScreen
                ></iframe>
              ) : (
                <div className='relative w-full h-56' onClick={() => handleVideoClick(item.link)}>
                  <img 
                    className='w-full h-full object-cover cursor-pointer' 
                    src={`https://i.ytimg.com/vi/${item.link}/hqdefault.jpg`} 
                    alt={`Video thumbnail ${item.link}`} 
                  />
                  <div className="absolute inset-0 flex justify-center items-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9 8.982v6.036L15 12l-6-3.018z" fill="black"/>
                      </svg>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
export default VideoSlide