import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

const newsCard = ({item}) => {
  const [borderColor, setBorderColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  
  useEffect(() => {
    switch (item.SubCategory) {
      case `Personal Meet & Greet`: 
        setBorderColor('border-primary');
        setBackgroundColor('bg-primary');
        break;
      case 'JKT48 Special Theater Show': 
        setBorderColor('border-primary');
        setBackgroundColor('bg-primary');
        break;
      case 'Last Show': 
        setBorderColor('border-primary');
        setBackgroundColor('bg-primary');
        break;
      case 'Event Merch':
        setBorderColor('border-blue-600');
        setBackgroundColor('bg-blue-600');
        break;
      case "OFC Event":
        setBorderColor('border-blue-600');
        setBackgroundColor('bg-blue-600');
        break;
      default:
        setBorderColor('border-black');
        setBackgroundColor('bg-black');
    }
    
    
  }, [item.tema]);
  
  
  
  
  
  
  
  return(
    <Link className={`rounded-2xl border-2 ${borderColor} w-full px-5 py-6 flex items-center relative shadow-lg hover:cursor-pointer duration-300 transition-all select-none z-20`} to={`/news/detail/${item.id}`}>
      
      
      <div className='absolute -top-3 flex justify-between w-full z-10 left-0 px-6'>
        
        <span className={`${backgroundColor} py-1 px-4 rounded-full text-xs poppins-500 italic font-semibold text-white uppercase line-clamp-1`}>
          {item.SubCategory}
        </span>
      </div>
        <span className={`${backgroundColor} py-1 px-4 rounded-full text-xs poppins-500 italic font-semibold text-white uppercase line-clamp-1 h-auto absolute -bottom-3`}>
          {item.PostingDate}
        </span>
      
      <p className='poppins-400 text-[12px] font-medium text-sm'>{item.PostTitle}</p>
      
      
    </Link>
    
  )
}
export default newsCard