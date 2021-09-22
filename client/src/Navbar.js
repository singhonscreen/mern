import React from 'react'
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CountryFilter from './component/CountryFilter';


const Navbar = () => {
  const [userdata, setUserData] = useState([{}])
  const [showData, setShowData] = useState([{}]);


  const callData = async (item) => {
    const response = await fetch("/asb", {

      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },

      credentials: 'include'
    })
    const countrylist = await response.json();

    setUserData(countrylist)


    // console.log(userdata.JSON)
  }
  useEffect(() => {
    //  fetch("/asb").then(res=>{
    //      if(res.ok){
    //          return res.json()
    //      }
    //  }).then(jsonRes=>setUserData(jsonRes))
    callData();
  }, [])
  // const callData = async (item) => {
  //   const response = await fetch("/country", {
  //       method: "GET",
  //       headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json"
  //       },
  //       credentials: 'include',
  //       query: {
  //         "country" : item
  //       }

  //   })
  //   const countrylist = await response.json();
  //   // const a = "avadhesh singh"
  //   console.log(countrylist);
  //   setUserData(countrylist)
  //   //    console.log(data.topic)
  // }
  const uniqueList = [
    ...new Set(
      userdata.map((curritm) => {
        return curritm.country;
      })
    )
  ]
  // console.log(uniqueList)

  const filterItem = (co) => {
    const updatedList = userdata.filter((curelmt) => {
      return curelmt.country === co;
    })
    // const newList = JSON.stringify(updatedList) //this is not apply it changes the array into string
    setShowData(updatedList)
  }
  // console.log("show data is", showData)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed_position ">
        <div className="container-fluid ">
          <NavLink className="navbar-brand" to="#">Navbar</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse  ms-auto" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">Link</NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle" to="/country" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Country
                </NavLink>
                <ul className="dropdown-menu  country-drop" aria-labelledby="navbarDropdown">
                  {
                    uniqueList.map((item) => {
                      return <li onClick={() => filterItem(item)}  ><NavLink className="dropdown-item" to={`/${item}`}>{item}</NavLink></li>
                    })
                  }
                </ul>
              </li>
            </ul>

          </div>
        </div>
      </nav>
     < CountryFilter showData={showData} />
    </>

  )
}

export default Navbar;
