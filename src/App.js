import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/home/Home';
import Footer from './Components/home/Footer';
import Profile from './Components/Profile';
import { useSelector } from 'react-redux';
import Landing from './Landing';
import { useState } from 'react';

function App() {
  const [redirect,setRedirect]=useState(false);
  const user = useSelector((state) => state.auth.user);
  return (
    <>   
    {redirect&&<div className="App">
      <NavBar />
      <Routes>     
        <Route path='/' element={<Home />} />
        {user&&<Route path='/profile' element={<Profile />} />}
      </Routes>
   
    </div>}
    {redirect&&<Footer/>}
    {!redirect&&<div>
    <Routes>     
        <Route path='/' element={<Landing />} />
        </Routes>
      </div>}
    </>
  );
}

export default App;
