import { useEffect, useState } from "react";
import "/home/atlantapatt/Development/code/phase-2/projectv2/src/CSS/Feed.css"


function Feed() {
    const [heart, setHeart] = useState(false)
    const [postData, setPostData] = useState([])
    useEffect (() => {
       fetch('http://localhost:3000/users')
        .then((r) => r.json())
        .then((data) => {
            setPostData(data)
        })
    }
    )
   function handleClick(e) {
        e.preventDefault()
        setHeart(heart => !heart)
    }

    return ( 
        <div className="feed">
            <div className="feed-wrap">
                {postData.map((data) => (
                    <div className="user-post">
                    <h4 className="feed-username">{data.username}</h4>
                    <p className="feed-followers">{data.followers} followers</p>
                    <span></span>
                    <img src={data.avatar} className="feed-img"></img>
                    <p className="feed-post">{data.post}</p>
                    <div className="icon-interact">
                    <div>
                        <p className="feed-likes">
                            {heart === false ? <i class="fa-regular fa-heart" id="feed-heart" onClick={handleClick}></i> : <i class="fa-solid fa-heart" id="feed-heart" onClick={handleClick}></i>}{data.likes}
                        </p>
                    </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
     );
}

export default Feed;
