import {Link} from 'react-router-dom'

const memberCard = ({item, bg}) => {
  return(
    <Link className='p-2 cursor-pointer w-full z-40 border-2 border-slate-200 rounded-xl' to={`/member/profile/${item.firebaseId}`}>
      
      <img src={`https://jkt48.com${item.image}`} className={`w-full h-44 object-cover rounded-lg border-2 border-white mb-2 ${bg ? 'border-2 border-slate-100' : ''}`} alt={item.fullname}/>
      
      <div className={`rounded-t-sm rounded-b-lg px-2 py-1 flex flex-col justify-center items-center gap-y-0.5 h-16 ${bg ? 'bg-red-100' : 'bg-white'} shadow-sm`}>
        <h2 className='poppins-500 font-semibold text-sm capitalize text-center '>{item.fullname}</h2>
      </div>
      
    </Link>
        // <span className='poppins-400 italic font-semibold text-primary text-xs'>18.09.2006</span>
  )
}
export default memberCard