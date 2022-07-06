import { useState } from "react";

function Feedcard({data}) {
    const [heart, setHeart] = useState(false)
    function handleFullClick(e) {
         e.preventDefault()
         setHeart((heart) => !heart)
    }

    function handleEmptyClick(e) {
        e.preventDefault()
        setHeart((heart) => !heart)
    }
    console.log(heart)
    console.log(parseInt(data.likes++))
    return ( 
        <div className="feed-wrap">
                    <div className="user-post">
                    <h4 className="feed-username">{data.username}</h4>
                    <p className="feed-followers">{data.followers} followers</p>
                    <span></span>
                    <img src={data.avatar} className="feed-img"></img>
                    <p className="feed-post">{data.post}</p>
                    <div className="icon-interact">
                    <div>
                        <p className="feed-likes">
                        {heart === true ? 
                        (<i class="fa-solid fa-heart" id="feed-heart" onClick={handleFullClick}></i>
                        ): (
                        <i class="fa-regular fa-heart" id="feed-heart" onClick={handleEmptyClick}></i>)}
                        {data.likes}
                        </p>
                    </div>
                    </div>
                    </div>
            </div>
     );
}

export default Feedcard;