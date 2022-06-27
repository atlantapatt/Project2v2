import React from "react";
import { Redirect } from "react-router-dom";
import Feed from "./HomeComonents/Feed";
import Leftbar from "./HomeComonents/Leftbar";
import Navbar from "./HomeComonents/Navbar";
import Rightbar from "./HomeComonents/Rightbar";
import "/home/atlantapatt/Development/code/phase-2/projectv2/src/CSS/Home.css"

function Home({isLoggedIn}) {
    if (isLoggedIn === false) return <Redirect to="/login" />
    return(
        <div>
            <Navbar />
            <div className="home-container">
                <Leftbar />
                <Feed />
                <Rightbar />
            </div>
        </div>
    )
}

export default Home