import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/global/Header';
import Home from './components/Home';
import Footer from './components/global/Footer';
import Reservation from './components/Reservation';

function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/reserve-table' element={<Reservation/>}/>
        </Routes>
        
      </div>
      <Footer/>
    </>
  );
}

export default App;
