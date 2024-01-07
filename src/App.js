// import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Nav from "./components/Nav";
import Reservation from './components/Reservation';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/reservation' element={<Reservation/>}/>
    </Routes>
     
    </>
  );
}

export default App;
