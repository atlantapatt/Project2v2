import { useEffect, useState } from "react";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";
import Rightbar from "./Rightbar";
import "/home/atlantapatt/Development/code/phase-2/projectv2/src/CSS/Userpage.css"


function Userpage({loginData}) {
    const [userPhotos, setUserPhotos] = useState([])

    useEffect(() => {
        fetch('https://picsum.photos/v2/list?page=2&limit=5')
        .then((r) => r.json())
        .then((data) => setUserPhotos(data))
    },[])
    console.log(loginData.username)
    return ( 
        <div>
          <Navbar /> 
            <div className="user-wrap">
                <div className="user-top">
                    <img className="user-img" src="/mockUser.jpg"></img>
                    <h1>{loginData.username}</h1>
                    <h2>Followers:</h2>
                    <h2>82</h2>
                    <div className="socials">
                        <hr></hr>
                        <div className="socials-list">
                            <h3 className="socials-title">Socials</h3>
                            <li>
                                <i class="fa-brands fa-github" id="socials-icon"></i>
                                <a href="https://github.com/atlantapatt">Github</a>
                            </li>
                            <li>
                                <i class="fa-brands fa-twitter" id="socials-icon"></i>
                                <a href="https://twitter.com/">Twitter</a>
                            </li>
                            <li>
                                <i class="fa-brands fa-instagram" id="socials-icon"></i>
                                <a href="https://www.instagram.com/">Instagram</a>
                            </li>
                            <li>
                                <i class="fa-brands fa-facebook" id="socials-icon"></i>
                                <a href="https://www.facebook.com/">Facebook</a>
                            </li>
                            <li>
                                <i class="fa-brands fa-twitch" id="socials-icon"></i>
                                <a href="https://www.twitch.tv/">Twitch</a>
                            </li>
                            <li>
                            <i class="fa-brands fa-youtube" id="socials-icon"></i>
                                <a href="https://www.youtube.com/">Youtube</a>
                            </li>
                        </div>
                    </div>
                </div>
                <div className="user-photos">
                    <h1>See what {loginData.username} has been up to!</h1>
                    {userPhotos.map((data) => (
                        <div className="image-div">
                            <img src={data.download_url}></img>
                            <p className="image-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    ))}
                </div>
            </div> 
        </div>
     );
}

export default Userpage;