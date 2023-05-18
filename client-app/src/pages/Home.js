import React, { useEffect, useState } from "react";
import Header from "../components/Header"
// import {getAll} from "../services/posts"
// import axios from "axios";
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import PostItem from "./PostItem";
// import { Link } from "react-router-dom"

const Home = () => {   
    const [dataSource, setDataSource] = useState([]);  

    const fetchData = () => {
        fetch("https://localhost:5000/getallposts")
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

    return (

        <>
            <Header />
            {/* <div>
                {dataSource.length > 0 && (
                // <ul>
                <>
                    {dataSource.map(dataSource => (
                        <p key={dataSource.id} dangerouslySetInnerHTML={{__html: dataSource.description}}></p>
                    ))}
                </>
                // </ul>
                )}
            </div> */}
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
            {/* <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Hello from CKEditor 5!</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Editor is ready to use!', editor );
                    } }
                    onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        console.log( { event, editor, data } );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                /> */}
        </>
    );
}

export default Home;