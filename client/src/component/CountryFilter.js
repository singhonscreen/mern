import React from 'react';

const CountryFilter = ({showData}) => {
    
    
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

            {showData.map((item, index) => {
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

export default CountryFilter
