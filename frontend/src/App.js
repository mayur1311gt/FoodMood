import './css/styles.css';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Home from './components/Home';
import Profile from './components/Profile';
import Footer from './components/Footer';
import FoodDiaries from './components/FoodDiaries';

function App() {

  const [ussr, setUssr] = useState({})
  const [loading, setLoading] = useState(true)

  // ####### get logged user's data
  useEffect(() => {
    const fun = async () => {
      const resp = await fetch('http://127.0.0.1:8000/api/user/1/');
      setLoading(false)
      setUssr(await resp.json())
    }
    fun();

  }, [])

  // ########## update user changes
  const UpdateUser=(newValTarget, newVal)=>{
    setUssr({
      ...ussr,
      newValTarget:newVal,
    })
  }


  if(loading){
    return(
        <div><h1>Loading...</h1></div>
    )
  }

  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/profile/*" element={<Profile theUser={ussr}/>}></Route>
          <Route exact path="/" element={<Auth />}></Route>
          <Route exact path="/fooddiaries" element={<FoodDiaries />}></Route>
          <Route exact element={<div>404</div>}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
