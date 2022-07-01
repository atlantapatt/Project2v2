import "/home/atlantapatt/Development/code/phase-2/projectv2/src/CSS/Rightbar.css"

function Rightbar({postData}) {
    const onlineData = postData.filter(user => {
        if (user.online === true) {
            return user
        }
    })
    console.log(onlineData)
    return ( 
        <div className="rightbar">
            <h3 className="online-title">Online Friends</h3>
            <hr></hr>
            {onlineData.map((data) => (
                <div className="online-friend-list">
                    <img className="online-image" src={data.avatar}></img>
                    <span className="online-dot">""</span>
                    <p className="online-name">{data.username}</p>
                </div>
            ))}
        </div>
     );
}

export default Rightbar;