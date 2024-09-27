import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

const newsCard = ({item}) => {
  const [borderColor, setBorderColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  
  useEffect(() => {
    switch (item.tema) {
      case 'theater':
        setBorderColor('border-primary');
        setBackgroundColor('bg-primary');
        break;
      case 'event':
        setBorderColor('border-blue-600');
        setBackgroundColor('bg-blue-600');
        break;
      default:
        setBorderColor('border-black');
        setBackgroundColor('bg-black');
    }
  }, [item.tema]);
  
  
  
  
  
  
  
  return(
    <Link className={`rounded-2xl border-2 ${borderColor} w-full px-5 pt-4 pb-3 flex items-center relative shadow-lg hover:cursor-pointer duration-300 transition-all select-none`}>
      
      
      <div className='absolute -top-3 flex justify-between w-full left-0 px-6'>
        
        <span className={`${backgroundColor} py-1 px-4 rounded-full text-xs poppins-500 italic font-semibold text-white uppercase`}>
          {item.tema}
        </span>
        
        <span className={`${backgroundColor} py-1 px-4 rounded-full text-xs poppins-500 italic font-semibold text-white uppercase`}>
          {item.date}
        </span>
        
      </div>
      
      <p className='poppins-400 text-[12px] font-medium text-sm'>{item.title}</p>
      
      
    </Link>
    
  )
}
export default newsCard