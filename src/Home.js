import { useEffect, useState } from "react";
import Feed from "./HomeComponents/Feed";
import Leftbar from "./HomeComponents/Leftbar";
import Navbar from "./HomeComponents/Navbar";
import Post from "./HomeComponents/Post";
import Rightbar from "./HomeComponents/Rightbar";
import "/home/atlantapatt/Development/code/phase-2/project/src/CSS/Home.css"

function Home({setIsLoggedIn, isLoggedIn, loginData, setLoginData}) {
    const [post, setPost] = useState(false)
    const [search, setSearch] = useState('')
    const [postData, setPostData] = useState([])
    console.log(postData)
    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then((r) => r.json())
        .then((data) => setPostData(data))
    },[])

    function addNewPost(post) {
        setPostData([...postData, post])
    }
    return ( 
        <div>
            <Navbar setSearch={setSearch} setPost={setPost}/>
            <div className="home-container">
                <Leftbar postData={postData} setPost={setPost} />
               {post === false ? <Feed postData={postData} search={search} /> : <Post loginData={loginData} setLoginData={setLoginData} addNewPost={addNewPost}/>}
                <Rightbar postData={postData}/>
            </div>
        </div>
     );
}

export default Home;