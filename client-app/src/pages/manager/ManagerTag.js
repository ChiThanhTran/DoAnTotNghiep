import React, { useEffect, useState } from "react";
import Header from "../../components/Header";

const ManagerTag = () => {   
    const [dataSource, setDataSource] = useState([]);  
    const fetchData = () => {
        fetch("https://localhost:5000/getalltags")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setDataSource(data)
                console.log(data)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (

        <>
            <Header />
            
            <div>
                
                    {dataSource.length > 0 && (
                        <>
                        {dataSource.map(dataSource => (
                            <p key={dataSource.id}>                                
                               <p>{dataSource.tagName}</p>
                            </p>
                        ))}
                        </>
                    )}
               
            </div>
           
        </>
    );
}

export default ManagerTag;