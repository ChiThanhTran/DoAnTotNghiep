import React, { useEffect, useState } from "react";
import Header from "../../components/Header"
// import {getAll} from "../services/posts"
import axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import PostItem from "../PostItem";
import { Link } from "react-router-dom"

const ManagerCategory = () => {   
    const [dataSource, setDataSource] = useState([]);  
    const fetchData = () => {
        fetch("https://localhost:5000/getallcategories")
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
                               <p>{dataSource.categoryName}</p>
                            </p>
                        ))}
                        </>
                    )}
               
            </div>
           
        </>
    );
}

export default ManagerCategory;