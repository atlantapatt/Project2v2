import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Feed from "./HomeComonents/Feed";
import Leftbar from "./HomeComonents/Leftbar";
import Navbar from "./HomeComonents/Navbar";
import Post from "./HomeComonents/Post";
import Rightbar from "./HomeComonents/Rightbar";
import "/home/atlantapatt/Development/code/phase-2/projectv2/src/CSS/Home.css"

function Home({isLoggedIn, loginData, setLoginData}) {
    const startValue = []
    const [post, setPost] = useState(false)
    const [search, setSearch] = useState("")
    const [postData, setPostData] = useState([]);
    console.log(postData)
    // useEffect (() => {
    //    fetch('http://localhost:3000/users')
    //     .then((r) => r.json())
    //     .then((data) => {
    //         console.log(data)
    //     })
    // },[])

 useEffect(() => {
    fetch("http://localhost:3000/users")
    .then((r) => r.json())
    .then((data) => setPostData(data))
 },[])

    function addNewPost(post) {
        setPostData(...postData, post)
    }
    console.log(postData)

if (isLoggedIn === false) return <Redirect to="/login" />

    return(
        <div>
            <Navbar setSearch={setSearch} setPost={setPost}/>
            <div className="home-container">

                <Leftbar postData={postData} setPost={setPost} />
               {post === false ? <Feed postData={postData} search={search} /> : <Post loginData={loginData} setLoginData={setLoginData} addNewPost={addNewPost} setPost={setPost}/>}
                <Rightbar postData={postData}/>
            </div>
        </div>
    )
}

export default Home