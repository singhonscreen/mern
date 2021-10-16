import React from 'react';
import { NavLink } from 'react-router-dom';

const CountryFilter = ({showData,setShowData,userdata }) => {
  console.log(showData)
  const uniqueList = ["All",
    ...new Set(
      userdata.map((curritm) => {
        return curritm.country;
      })
    )
  ]
  const uniqueList1 = ["All",
    ...new Set(
      userdata.map((curritm) => {
        return curritm.topic;
      })
    )
  ]
  // console.log(uniqueList)

  const filterItem = (co) => {
    if(co==="All"){
      setShowData(userdata)
      return
    }
    const updatedList = userdata.filter((curelmt) => {
      return curelmt.country === co                  
    })
    setShowData(updatedList)
  }
  
  const filterItem1 = (co1) => {
    if(co1==="All"){
      setShowData(userdata)
      return
    }
    const updatedList1 = userdata.filter((curelmt) => {
      return curelmt.topic === co1                  
    })
   
    // const newList = JSON.stringify(updatedList) //this is not apply it changes the array into string
    setShowData(updatedList1)
  }
    
    return (
        <div className="container-fluid">
        <table>

            <thead>
                <tr className="table-row" >
                    <th className="table-heading text-center px-4" >Sr.</th>
                    <th className="table-heading text-center px-4" >Intensity</th>
                    <th className="table-heading text-center px-4">Likelyhood</th>
                    <th className="table-heading text-center  px-4">Relevance</th>
                    <th className="table-heading text-center  px-4">Year</th>
                    <th className="table-heading text-center  px-4">
                    <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Country
                </NavLink>
                    <ul className="dropdown-menu  country-drop" aria-labelledby="navbarDropdown">
                    {
                      uniqueList.map((item) => {
                        return <li onClick={() => filterItem(item)}  ><NavLink className="dropdown-item" to="/">{item}</NavLink></li>
                      })
                    }
                  </ul>
                  
                  </th>
                    <th className="table-heading text-center  px-4"> <NavLink className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Topic
                  </NavLink>
                      <ul className="dropdown-menu  country-drop" aria-labelledby="navbarDropdown">
                      {
                        uniqueList1.map((item) => {
                          return <li onClick={() => filterItem1(item)}  ><NavLink className="dropdown-item" to="/">{item}</NavLink></li>
                        })
                      }
                    </ul>
                    </th>
                    <th className="table-heading text-center  px-4">Region</th>
                    <th className="table-heading text-center  px-4">City </th>
                </tr>
            </thead>

            { 
              showData.map((item, index) => {
                return (
                    <tbody>
                        <tr className="table-row text-center " key={item.id}>
                            <td className="table-data text-center ">{index + 1}</td>
                            <td className="table-data text-center ">{item.intensity}</td>
                            <td className="table-data text-center ">{item.likelihood}</td>
                            <td className="table-data text-center ">{item.relevance}</td>
                            <td className="table-data text-center ">{item.start_year}</td>
                            <td className="table-data text-center ">{item.country}</td>
                            <td className="table-data text-center ">{item.topic}</td>
                            <td className="table-data text-center ">{item.region}</td>
                            <td className="table-data text-center ">{item.city}</td>
                        </tr>
                    </tbody>


                )

            })
            }

        </table>
    </div>
    )
}

export default CountryFilter
