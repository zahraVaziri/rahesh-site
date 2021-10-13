import React, { useState,useEffect } from "react";
import About from "../pages/components/about/About";
import { useHistory, useLocation } from "react-router-dom";
import Header2 from "../pages/components/header2/Header2";
import Servises from "../pages/components/servises/Servises";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";
import Loading from "../pages/components/loading/Loading";

const Layout = (props) => {

    const [loading,setLoading] =useState(true)

  const [show,setShow]= useState()
  const location = useLocation()

  useEffect( ()=> {
    setLoading(true)
  },[props.children])


  useEffect(() => {
  if (location.pathname == "/") {
    setLoading(false) 
    setShow( false)
  } else {
    setShow(true)
    setLoading(false) 
    // setInterval(() => {
    //    setLoading(false) 
    // }, 3000);
  }
})
  return (
    <div>
     
      {
        show ? <Header2 /> : ''
      }

      {
        
        loading ? ( show ? <Loading/>  : <div> <Header2/> <Loading/> </div>) : props.children
      }
      

      <Footer/>
    </div>
  );
}

export default Layout;
