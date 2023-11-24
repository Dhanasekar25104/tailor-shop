import './App.css';
import { BrowserRouter ,Route,NavLink,Routes } from "react-router-dom";
import Home from "./pages/Home"
import Booking from "./pages/Booking"
import Review from "./pages/Review"
import { useState } from 'react';
import Footer from './components/footer';
import Scrolltop from './components/scrolltop';
function App() {
  const [change,setChange]=useState(false);
  function handleClick(){
    setChange(pre=>!pre)
  }
 
  return (
    <div className="App">

      <BrowserRouter>
      <header className="App-header">
        <nav>
          <div className='logo'>
          <img src="./images/machine.png" alt="tailor machine"></img>
          <h1>Tailor-trends</h1>
          </div>
          <div className='nav-link'>
         <NavLink to="/" className="link">Home</NavLink>
         <NavLink to="/booking" className="link">Booking</NavLink>
         <NavLink to="/review" className="link">Review</NavLink>
        {change?<i className="fa-solid fa-xmark " onClick={handleClick}></i>:<i className="fa-solid fa-bars " onClick={handleClick}></i>} 

         </div>
        </nav>
        <div className={change?'nav-open':'nav-close'}>
          <NavLink to="/" className={change?"link2-open ":"link2-close"} onClick={handleClick}>Home</NavLink>
         <NavLink to="/booking" className={change?"link2-open ":"link2-close"} onClick={handleClick}>Booking</NavLink>
         <NavLink to="/review" className={change?"link2-open ":"link2-close"} onClick={handleClick}>Review</NavLink>
         </div>
      </header>
      <Scrolltop></Scrolltop>
      <Routes>
          <Route path="/" element={<Home></Home>}></Route> 
          <Route path="/booking" element={<Booking></Booking>}></Route> 
          <Route path="/review" element={<Review></Review>}></Route> 

          </Routes> 
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
