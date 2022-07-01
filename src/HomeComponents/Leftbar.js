import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import "/home/atlantapatt/Development/code/phase-2/projectv2/src/CSS/Leftbar.css"

function Leftbar({postData, setPost}) {
    let history = useHistory()
    function routeChange() {
        let path = "/"
        history.push(path)
    }
    return ( 
        <div className="leftbar">
            <div className="sidebar-wrap">
                <ul className="leftbar-list">
                    <li className="list-item">
                    <i className="fa-solid fa-rss" id="leftbar-icon" onClick={(() => setPost(false))}></i>
                    <span className="leftbar-rss-span">Feed</span>
                    </li>
                    <li className="list-item">
                    <i class="fa-solid fa-user-group" id="leftbar-icon"></i>
                    <span className="leftbar-friends-span">Friends</span>
                    </li>
                    <li className="list-item">
                    <i class="fa-solid fa-comment" id="leftbar-icon"></i>
                    <span className="leftbar-chat-span">Chat</span>
                    </li>
                    <li className="list-item">
                    <i class="fa-solid fa-paper-plane" id="leftbar-icon" onClick={(() => setPost(true))}></i>
                    <span className="leftbar-post-span" >Post</span>
                    </li>
                    <li className="list-item">
                    <i className="fa-solid fa-bell" id="leftbar-icon" onClick={(() => setPost(false))}></i>
                    <span className="leftbar-notification-span">Notifications</span>
                    </li>
                    <li className="list-item">
                    <i class="fa-solid fa-house-user" id="leftbar-icon"></i>
                    <span className="leftbar-Home-span">Home</span>
                    </li>
                    <li className="list-item">
                    <i class="fa-solid fa-right-from-bracket" id="leftbar-icon" onClick={routeChange}></i>
                    <span className="leftbar-Logout-span">Log Out</span>
                    </li>
                    <hr></hr>
                    <li className="friends-list">
                        <h4>
                        Friends List
                        </h4>
                        {postData.map((data) => (
                    <div className="friend-list-div">
                        <img className="friend-list-image" src={data.avatar}></img>
                        <p className="friend-list-names" >{data.username}</p>
                    </div>
                ))}
                    </li>
                </ul>
            </div>
        </div>
     );
}

export default Leftbar;