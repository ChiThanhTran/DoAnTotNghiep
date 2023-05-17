import React, { useEffect, useState } from "react";
import Header from "../components/Header"
// import {getAll} from "../services/posts"
import axios from "axios";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useParams } from "react-router";
import "../components/ShowPost.css";


const ShowPost = () => {
    const [post, setPost] = useState();
    const [dataSource, setDataSource] = useState([]);
    const [user, setUser] = useState([]);
    const [comment, setComment] = useState([]);
    const [infocomment, setInfoComment] = useState([]);
    const id = useParams().id;
    const fetchData = () => {
        fetch(`https://localhost:5000/getpost/${id}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setDataSource(data)
            })
    }
    useEffect(() => {
        fetchData()
    }, [])
    
    const getuser = async () => {
        let res = await axios.get(`https://localhost:5000/getuser/${dataSource.userId}`);
        if (res) {
            setUser(res.data);
        }
    }

    useEffect(() => {
        getuser();
    }, [dataSource.userId]);
    
    const getcomment = async() =>{
        let res = await axios.get(`https://localhost:5000/getallcomment?postid=${id}`);
        if (res){
            setComment(res.data);
        }
    }
    useEffect(() => {
        getcomment();
    }, [id]);
    const getinfocomment = async() =>{
        let res = await axios.get(`https://localhost:5000/getcomment/${comment.id}`);
        if (res){
            setInfoComment(res.data);
        }
    }
    useEffect(() => {
        getinfocomment();
    }, [comment.id]);
    console.log(infocomment);
    return (

        <>
            <Header />
            <div className="showpost">
                <div className="div1"> </div>
                <div className="div2">
                    <div className="tieude-baiviet">{dataSource.postTitle}</div>
                    <div className="mota-baiviet">{dataSource.specification}</div>
                    {
                        user
                        && (<div className="tacgia"> {user.name}</div>)
                    }
                    <div>
                        <p dangerouslySetInnerHTML={{__html: dataSource.description}}></p> 
                    </div>   
                    <div className="binhluan">
                        {comment.length > 0 && (
                            <>
                            {comment.map(comment => (
                                <p key={comment.id}>  
                                    <img src={comment.image} />                              
                                    <p>{comment.name}</p>
                                    <p>{comment.text}</p>
                                </p>
                            ))}
                            </>
                        )}
                    </div>

                </div>
                <div className="div3"> </div>
            </div>          
        </>
    );
}

export default ShowPost;