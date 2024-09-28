import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import { useEffect } from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/home/Home';
import Footer from './Components/home/Footer';
import Profile from './Components/Profile';
import { useSelector } from 'react-redux';
import Landing from './Landing';

function App() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const location = useLocation();  // Get current location

   return (
    <>
      {/* For Landing, render separately without the App class */}
      {location.pathname === '/' ? (
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      ) : (
        // For all other routes, wrap in the App div with NavBar and Footer
        <>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/home" element={<Home />} />
            {user && <Route path="/profile" element={<Profile />} />}
          </Routes>        
        </div>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
