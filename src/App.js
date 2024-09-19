import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/home/Home';
import Footer from './Components/home/Footer';
import Profile from './Components/Profile';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.auth.user);
  return (
    <>   
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        {user&&<Route path='/profile' element={<Profile />} />}
      </Routes>
   
    </div>
    <Footer/>
    </>
  );
}

export default App;
