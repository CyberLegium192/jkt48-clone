import Navbar from '../../component/navbar/navbar.jsx'
import Footer from '../../component/header/footer.jsx'
import CardMember from '../../component/card/member-card.jsx'
import {fetchMembers} from '../../../libs/api/member.js'
import {useState, useEffect} from 'react'
import MemberCardSkeletons from '../../component/skeleton/member-card-skeleton.jsx'

const memberPage = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);


  useEffect(() => {
     fetchMembers()
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
  
  


  const Skeletons = () => {
    if (loading) {
      return (
        <>
          {Array(12).fill(null).map((_, index) => (
            <MemberCardSkeletons key={index} />
          ))}
        </>
      )
    } else {
      return data?.map((item => item.status == 'JKT48' ? <CardMember item={item} bg='bg-primary' key={item.id}/> : null))
    }
  }




  return( 
   <>
     <Navbar />
       <h4 className='text-xl poppins-400 font-medium px-5 mt-6 text-primary tracking-widest'>Member JKT48</h4>
       <div className='grid grid-cols-3 gap-x-4 gap-y-5 px-3 mt-5 mb-16 md:grid-cols-5 lg:grid-cols-6'>
          { /* data && data.map(item => item.status == 'JKT48' ? <CardMember item={item} bg='bg-primary' key={item.id}/> : null ) */ } 
          {<Skeletons status="JKT48"/>}
       </div>
       
       <h4 className='text-xl poppins-400 font-medium px-5 mt-6 text-primary tracking-widest'>Trainee JKT48</h4>
       
       <div className='grid grid-cols-3 gap-x-4 gap-y-5 px-3 mt-5 mb-16 md:grid-cols-5 lg:grid-cols-6'>
          {data && data.map(item => item.status == 'Trainee' ? <CardMember item={item} bg='bg-primary' key={item.id} /> : null )} 
       </div>
     <Footer />
   </> 
  )
}
export default memberPage