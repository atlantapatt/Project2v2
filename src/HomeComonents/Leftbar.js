import "/home/atlantapatt/Development/code/phase-2/projectv2/src/CSS/Leftbar.css"

function Leftbar() {
    return ( 
        <div className="leftbar">
            <div className="sidebar-wrap">
                <ul className="leftbar-list">
                    <li className="list-item">
                    <i className="fa-solid fa-rss" id="leftbar-icon"></i>
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
                    <i class="fa-solid fa-paper-plane" id="leftbar-icon"></i>
                    <span className="leftbar-post-span">Post</span>
                    </li>
                    <li className="list-item">
                    <i className="fa-solid fa-bell" id="leftbar-icon"></i>
                    <span className="leftbar-notification-span">Notifications</span>
                    </li>
                    <li className="list-item">
                    <i class="fa-solid fa-house-user" id="leftbar-icon"></i>
                    <span className="leftbar-Home-span">Home</span>
                    </li>
                </ul>
            </div>
        </div>
     );
}

export default Leftbar;