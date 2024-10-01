import Skeleton from '@mui/joy/Skeleton';
import {Link} from 'react-router-dom'
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import 'react-loading-skeleton/dist/skeleton.css'


const NewsCardSkeletons = () => {
  return(
    <div className="rounded-2xl border-2 w-full px-5 py-6 flex items-center relative shadow-lg hover:cursor-pointer duration-300 transition-all select-none z-20">
      
      {/* Skeleton untuk badge kategori event */}
      <div className='absolute -top-3 flex justify-between w-full z-10 left-0 px-6'>
        <Skeleton animation="wave" variant="rectangular" width={80} height={24} sx={{ borderRadius: '12px' }} />
      </div>

      {/* Skeleton untuk tanggal di bagian bawah */}
      <span className="py-1 px-4 rounded-full h-auto absolute -bottom-4 left-0 ">
        <Skeleton animation="wave" variant="rectangular" width={100} height={24} sx={{ borderRadius: '12px' }} />
      </span>

      {/* Skeleton untuk teks konten */}
      <div className='poppins-400 text-[12px] font-medium text-sm'>
        <Typography>
          <Skeleton animation="wave">
            Lorem ipsum is placeholder text 
            commonly used in
            Lorem ipsum is placeholder text 
            commonly used in
            Lorem ipsum is placeholder text 
            commonly
          </Skeleton>
        </Typography>
      </div>
      
    </div>
  )
}

    // <Link className="rounded-2xl border-2  w-full px-5 py-6 flex items-center relative shadow-lg hover:cursor-pointer duration-300 transition-all select-none z-20">
      
      
    //   <div className='absolute -top-3 flex justify-between w-full z-10 left-0 px-6'>
        
    //     <span className="py-1 px-4 rounded-full text-xs poppins-500 italic font-semibold text-white uppercase line-clamp-1">
    //       event
    //     </span>
    //   </div>
    //     <span className=" py-1 px-4 rounded-full text-xs poppins-500 italic font-semibold text-white uppercase line-clamp-1 h-auto absolute -bottom-3">
    //       desember 2024
    //     </span>
      
    //   <p className='poppins-400 text-[12px] font-medium text-sm'>Pengumuman Mengenai Graduation 2-Shot Online Reva Fidela dengan Chekicha</p>
    // </Link>
export default NewsCardSkeletons