import "/home/atlantapatt/Development/code/phase-2/project/src/CSS/Navbar.css"
function Navbar({setSearch, setPost}) {
    return ( 
        <div className="navbar-container">
            <div className="navbar-left">
                <span className="logo">Quacker</span>
                {/* <img src="/QuackerDuck.jpg" alt="DuckLogo" className="QuackerDuck"></img> */}
            </div>
            
            <div className="navbar-center">
                <div className="searchbar">
                <i className="fa-solid fa-magnifying-glass" id="searchIcon"></i>
                <input placeholder="Search users..." className="search-input" onChange={(e) => setSearch(e.target.value)}></input>
                </div>
            </div>
            <div className="navbar-right">
                <div className="navbarLink" onClick={(() => setPost(false))}>Homepage</div>
                <div className="navbarLink" onClick={(() => setPost(true))}>Post</div>
            </div>
            <div className="navbarIcons">
                <div className="navbarIconItem">
                    <i className="fa-solid fa-user"></i>
                    <span className="navbarIconBadge">1</span>
                </div>
                <div className="navbarIconItem">
                    <i className="fa-solid fa-comment-dots"></i> 
                    <span className="navbarIconBadge">2</span>
                </div>
                <div className="navbarIconItem">
                    <i className="fa-solid fa-bell"></i>
                    <span className="navbarIconBadge">4</span>
                </div>
                <img src="/mockUser.jpg" alt="userImg" className="userImg"></img>
            </div>
        </div>
     );
}

export default Navbar;