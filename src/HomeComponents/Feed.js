import { useEffect, useState } from "react";
import Feedcard from "./FeedCard";
import "/home/atlantapatt/Development/code/phase-2/projectv2/src/CSS/Feed.css"


function Feed({postData, search}) {
    const [heart, setHeart] = useState(false)
   function handleClick(e) {
        e.preventDefault()
        setHeart((prevState) => !prevState)
        
   }

    
    console.log(postData)

    const filteredData = postData.filter(user => {
        return [user.username].toString().toLowerCase().includes(search.toLowerCase())
    
})

const listofPosts = filteredData.map((data) => {
    return <Feedcard data={data}/>
})
    

    return ( 
        <div className="feed">
            {listofPosts}
        </div>
     );
}

export default Feed;
