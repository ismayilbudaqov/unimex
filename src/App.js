import React from 'react'
import './Ismayil.css';
import Header from './companents/Header';
import Carousel from './companents/Carousel.jsx'
import Sofas from './companents/Sofas';
import Watchs from './companents/Watchs';
import MainNav from './companents/MainNav';
import Furniter from './companents/Furniter';
import Lolo from './companents/Lolo';
import Blogs from './companents/Blogs';
import Upfooter from './companents/Upfooter';
import Footer from "./companents/Footer"
import {useEffect } from 'react';
import axios from 'axios';
import {useDispatch} from "react-redux"
import Login from './companents/Login';
import {Routes,Route} from "react-router-dom"
import Ani from "./companents/Ani"


function App() {
const dispatch = useDispatch()
useEffect(()=>{
axios.get(" http://localhost:3001/Arr")
.then(res => res.data)
.then(res => dispatch({type:"ALL_DATA",payload:res}))
}, []);


return (
  <div className="App">
   <Ani/>
     <Header/>
     <Routes>
  <Route path='/login' element={<Login/>}/>

      </Routes>
     <Carousel/>

     <div className='ferhad'>

     <Sofas/>
     <Watchs/>
     </div>
     <div className='desing'>
       <MainNav/>
       <Furniter/>
       <Lolo/>
       <Blogs/>
       <Upfooter/>
     
       <Footer />

  
     </div>
  
    </div>
  );
}

export default App;
