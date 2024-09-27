import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

const scheduleCard = ({item}) => {
  const [borderColor, setBorderColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  
  useEffect(() => {
    switch (item.tema) {
      case 'theater':
        setBorderColor('border-primary');
        setBackgroundColor('bg-primary');
        break;
      case 'trainee':
        setBorderColor('border-green-500');
        setBackgroundColor('bg-green-500');
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
    <Link className={`rounded-2xl border-2 ${borderColor} w-full px-3 pt-5 pb-3 items-center gap-x-7 relative shadow-lg hover:cursor-pointer duration-300 transition-all select-none`}>
      
      
      <div className='absolute -top-3 flex justify-between w-full left-0 px-6'>
        <span className={`${backgroundColor} py-1 px-4 rounded-full text-xs poppins-500 italic font-semibold text-white uppercase`}>
          {item.tema}
        </span>
      </div>
      
      
      {/*DATE SHOW*/}
      <div className='flex justify-between items-center gap-y-1 mb-2 opacity-50'>
        <p className='italic poppins-500 text-xs font-medium'>{item.date}</p>
        <p className='italic poppins-500 text-xs font-medium'>{item.time}</p>
      </div>
      
      <p className='poppins-400 font-semibold tracking-widest text-[14px]'>{item.title}</p>
      
      
    </Link>
    
  )
}
export default scheduleCard