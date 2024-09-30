import Navbar from '../../component/navbar/navbar.jsx'
import Footer from '../../component/header/footer.jsx'
import CardNews from '../../component/card/news-card.jsx'
import Dotted from '../../assets/decoration/dotRed.svg'
import Curve from '../../assets/decoration/blackCurve.svg'
import Triangle from '../../assets/decoration/triangle.svg'
import { fetchNews } from '../../../libs/api/news.js'
import { useEffect, useState } from 'react'



const api = [
  { 
    "id": "1",
    "title": "Pengumuman Mengenai Pertunjukan Theater Kelulusan Reva Fidela",
    "tema": "theater",
    "date": "19-09-2024",
  },
  { 
    "id": "2",
    "title": "Pengumuman Mengenai Birthday 2-Shot Online bulan September dengan Chekicha",
    "tema": "event",
    "date": "11-09-2024",
  },
  { 
    "id": "1",
    "title": "Pengumuman Mengenai Pertunjukan Theater Kelulusan Reva Fidela",
    "tema": "theater",
    "date": "19-09-2024",
  },
  { 
    "id": "3",
    "title": "Pengumuman Mengenai Penjualan Digital Wallpaper Pack Edisi Sousenkyo 2024 dengan Bonus Kode Serial Pemilihan Member Single Ke-26 JKT48",
    "tema": "other",
    "date": "10-09-2024",
  },
  { 
    "id": "2",
    "title": "Pengumuman Mengenai Birthday 2-Shot Online bulan September dengan Chekicha",
    "tema": "event",
    "date": "11-09-2024",
  },
  { 
    "id": "3",
    "title": "Pengumuman Mengenai Penjualan Digital Wallpaper Pack Edisi Sousenkyo 2024 dengan Bonus Kode Serial Pemilihan Member Single Ke-26 JKT48",
    "tema": "other",
    "date": "10-09-2024",
  },
  { 
    "id": "2",
    "title": "Pengumuman Mengenai Birthday 2-Shot Online bulan September dengan Chekicha",
    "tema": "event",
    "date": "11-09-2024",
  },
  { 
    "id": "3",
    "title": "Pengumuman Mengenai Penjualan Digital Wallpaper Pack Edisi Sousenkyo 2024 dengan Bonus Kode Serial Pemilihan Member Single Ke-26 JKT48",
    "tema": "other",
    "date": "10-09-2024",
  },
  { 
    "id": "1",
    "title": "Pengumuman Mengenai Pertunjukan Theater Kelulusan Reva Fidela",
    "tema": "theater",
    "date": "19-09-2024",
  },
  { 
    "id": "3",
    "title": "Pengumuman Mengenai Penjualan Digital Wallpaper Pack Edisi Sousenkyo 2024 dengan Bonus Kode Serial Pemilihan Member Single Ke-26 JKT48",
    "tema": "other",
    "date": "10-09-2024",
  },
]

const newsPage = () => {
  
  
  useEffect(() => {
     fetchNews().then(res => console.log(res))
   }, [])
  
  
  
  return(
    <>
      <Navbar />
      <div className='px-5 pt-7 relative pb-28 overflow-hidden'>
        <h3 className='text-3xl font-semibold poppins-500 tracking-widest text-primary'>NEWS</h3>
        
        <div className='flex flex-col gap-y-8 mt-9'>
          {api.map((item, i) => <CardNews item={item} key={i}/>)}
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