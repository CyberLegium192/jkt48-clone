import Navbar from '../../component/navbar/navbar.jsx'
import Banner from '../../component/carousel/banner.jsx'
import VideoCarousel from '../../component/carousel/video.jsx'
import BoxNews from '../../component/header/box-news.jsx'
import BoxSchedule from '../../component/header/box-schedule.jsx'
import BoxBirthday from '../../component/header/box-birthday.jsx'
import Group48 from '../../component/header/group-link.jsx'
import Footer from '../../component/header/footer.jsx'

const homePage = () => {
  return(
  <>
    <Navbar />
    <Banner />
    <BoxNews />
    <BoxSchedule />
    <BoxBirthday />
    <VideoCarousel  />
    <Group48 />
    <Footer />
  </>
  )
}
export default homePage