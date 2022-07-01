import { useState } from "react";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";
import Rightbar from "./Rightbar";
import "/home/atlantapatt/Development/code/phase-2/projectv2/src/CSS/Post.css"

function Post({loginData, setLoginData, addNewPost}) {
const [newPost, setNewPost] = useState({
    // "username": loginData.username,
    // "avatar": "/mockUser.jpg",
    "post": "",
    // "followers": Math.floor(Math.random() * 100),
    // "likes": Math.floor(Math.random() * 11)
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
            "post": newPost.post
        }
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userPost)
        })
        .then((r) => r.json())
        .then((post) => setNewPost(post))
    }
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