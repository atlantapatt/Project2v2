import { useEffect, useState } from "react";
import "/home/atlantapatt/Development/code/phase-2/projectv2/src/CSS/Feed.css"


function Feed({postData, search}) {
    const [heart, setHeart] = useState(false)
   function handleClick(e) {
        e.preventDefault()
        setHeart(heart => !heart)
    }

    console.log(postData)

    const filteredData = postData.filter(user => {
        return [user.username].toString().toLowerCase().includes(search.toLowerCase())
    
})
    

    return ( 
        <div className="feed">
            <div className="feed-wrap">
                {filteredData.map((data) => (
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
