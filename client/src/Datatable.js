import React from 'react';
import { useEffect, useState } from 'react';

const Datatable = () => {
    const [userdata, setUserData] = useState([{  }])


    const callData = async () => {
        const response = await fetch("/asb", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: 'include'
        })
        const data1 = await response.json();
        // const a = "avadhesh singh"
        // console.log(a);
        setUserData(data1)
        //    console.log(data.topic)
    }

    useEffect(() => {
        //  fetch("/asb").then(res=>{
        //      if(res.ok){
        //          return res.json()
        //      }
        //  }).then(jsonRes=>setUserData(jsonRes))
        callData();
    }, [])

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
                        <th className="table-heading text-center  px-4">Country</th>
                        <th className="table-heading text-center  px-4">Topics</th>
                        <th className="table-heading text-center  px-4">Region</th>
                        <th className="table-heading text-center  px-4">City </th>
                    </tr>
                </thead>

                {userdata.map((item, index) => {
                    return (
                        <tbody>
                            <tr className="table-row text-center " key={index}>
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

export default Datatable;
