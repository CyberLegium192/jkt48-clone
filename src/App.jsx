import { BrowserRouter as Router, Routes, Route, Navigate, Link} from "react-router-dom"
import './App.css'
import {useState, useEffect} from 'react'
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom'
// ============= IMPORT PAGES =============
import HomePage from './pages/homePage/homePage.jsx'
import Login from './pages/signin/signin.jsx'
import News from './pages/newsPage/newsPage.jsx'
import NewsDetail from './pages/newsPage/newsDetail.jsx'
import Schedule from './pages/schedulePage/schedulePage.jsx'
import Member from './pages/member/memberPage.jsx'


// =========== POFILE USER ================
import UserPage from './pages/user/userPage.jsx'
import Register from './pages/signin/register.jsx'


function App() {

  return(
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/news' element={<News />} />
      <Route path='/news/detail/:id' element={<NewsDetail />} />
      <Route path='/schedule' element={<Schedule />} />
      <Route path='/member' element={<Member/>} />
          
          
          
          {/* ======== USER PAGE =========*/}
      <Route path='/register/form' element={<Register />} />
      <Route path='/profile' 
            element={<UserPage />} />
    </Routes>
  )
}

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper
