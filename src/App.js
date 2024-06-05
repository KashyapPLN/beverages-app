import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Components/home/Home';
import Footer from './Components/home/Footer';

function App() {
  return (
    <>   
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
   
    </div>
    <Footer/>
    </>
  );
}

export default App;
