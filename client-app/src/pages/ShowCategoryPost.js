import React, { useEffect, useState } from "react";
import Header from "../components/Header"
// import {getAll} from "../services/posts"
import axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useParams } from "react-router";
import "../components/ShowCategoryPost.css";
import PostItem from "./PostItem";


const ShowCategoryPost = () => {
    
    const [dataSource, setDataSource] = useState([]);
    const [cate, setCate] = useState([]);
    const id = useParams().id;
    console.log("hello",id)
    const fetchData = () => {
        fetch(`https://localhost:5000/getallpostbycategory?categoryid=${id}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setDataSource(data)
            })
    }

    const fetchCate = () => {
        fetch(`https://localhost:5000/getcategory/${id}`)
            .then(response => {
                return response.json()
            })
            .then(data1 => {
                setCate(data1.categoryName)
            })
    }

    useEffect(() => {
        fetchData();
        fetchCate();
    }, [id])

    return (
        <>
            <Header />
            <div className="tieude-cate">
                <div>{cate}</div>
            </div>
            <div>
                {dataSource.length > 0 && (
                    <>
                        {dataSource.map(dataSource => (
                            <p key={dataSource.id}>
                                <PostItem data={dataSource} />
                            </p>
                        ))}
                    </>
                )}
            </div>
        </>
    );
}

export default ShowCategoryPost;