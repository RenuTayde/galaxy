import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Router from './Route';
import Content from './Content'
import Navbar from './Components/SideMenu';
import PopUpMenu from './PopUpMenu';
import Draw from './Components/Draw';

export default function App() {  
  return (
 <div className="App"> 
       <Navbar/> 
        {/* <Router/> */}
      <Content/> 
       <PopUpMenu />
       <Draw/>
  </div>   
  );
} 