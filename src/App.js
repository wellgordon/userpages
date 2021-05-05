import './App.css';
import Home from './Home'
import MainUserPage from './MainUserPage'
import UserInfo from './UserInfo'
import About from './About'
import Nav from './Nav'
import Footer from './Footer'
import { useState } from 'react'

function App() {

  const [currPage, setCurrPage] = useState('Home') 

  return (
   <>
    <Nav setPage={setCurrPage} />
    {currPage === 'Home' && <Home setPage={setCurrPage}/>}
    {currPage === 'MainUserPage' && <MainUserPage setPage={setCurrPage}/>}
    {currPage === <UserInfo />  && <UserInfo setPage={setCurrPage}/>}
    {currPage === 'About' && <About setPage={setCurrPage}/>}
    <Footer></Footer>
   </>
  );
}

export default App;
