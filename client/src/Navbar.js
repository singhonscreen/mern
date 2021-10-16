import React from 'react'
import { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
import CountryFilter from './component/CountryFilter';


const Navbar = () => {
  const [userdata, setUserData] = useState([{}])
  const [loading, setLoading] = useState(false)
  const [showData, setShowData] = useState(userdata);
  
  
  
  const callData = async () => {
    setLoading(true)
    const response = await fetch("/alldata", {
      
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      
      credentials: 'include'
    })
    const allData = await response.json();
    
    setUserData(allData)
    setLoading(false)
  }
  useEffect(() => {
    callData();
  }, [])
  
  useEffect(() => {
    setShowData(userdata)
  }, [userdata])
    if(loading) {return <h1>loading....</h1> }else{

      return (
        <>
        
     < CountryFilter showData={showData} setShowData= {setShowData} userdata = {userdata} setUserData={setUserData} />
     </>
     
     )
    }
    }
    
    export default Navbar;
    