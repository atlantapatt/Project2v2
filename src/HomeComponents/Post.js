import { useState } from "react";
import { Redirect } from "react-router-dom";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";
import Rightbar from "./Rightbar";
import "/home/atlantapatt/Development/code/phase-2/projectv2/src/CSS/Post.css"

function Post({loginData, setLoginData, addNewPost, setPost}) {
const [newPost, setNewPost] = useState({
    "username": '',
    "avatar": "",
    "post": "",
    "followers": "",
    "likes": ""
})
console.log(addNewPost)
    function handleChange(event) {
        setNewPost({
            ...newPost,
            "post": event.target.value
        })
    }
    console.log(newPost)
    function handleSubmit(e) {
        e.preventDefault()
        const userPost = {
            "username": loginData.username,
            "avatar": "/mockUser.jpg",
            "post": newPost.post,
            "followers": 82,
            "likes": Math.floor(Math.random() * 11)
        }
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userPost)
        })
        .then((r) => r.json())
        .then((post) => {
            setNewPost(post)
            setPost(false)
        })
    }

    console.log(newPost)
    return ( 
        <div className="post">
           <form className="post-wrap" onSubmit={handleSubmit}>
                <h3 className="post-title">
                    What do you want to say?
                </h3>
                <hr></hr>
                <textarea value={newPost.post} className="post-input" placeholder="Quack about it here" onChange={handleChange}></textarea>
                <div className="post-button-div">
                    <button type="submit" className="post-button">Post</button>
                </div>
           </form>
        </div>
     );
}

export default Post;