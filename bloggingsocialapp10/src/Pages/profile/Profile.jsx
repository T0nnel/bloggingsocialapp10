import React from "react";
import "./profile.css"
import Topbar from "../../Components/topbar/Topbar"
import Sidebar from "../../Components/topbar/sidebar/Sidebar"
import Feed from "../../Components/topbar/feed/Feed"
import Rightbar from "../../Components/topbar/rightbar/Rightbar"

export default function Profile() {
    return (
        <>
        <Topbar />
        <div className="profile">
        <Sidebar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img className="profileCoverImg" src="../src/images/post/3.jpeg" alt="" />
                <img className="profileUserImg" src="../src/images/person/7.jpeg" alt="" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">Willow Smith</h4>
                    <span className="profileInfoDesc">Welcome to my profile!</span>
                </div>
            </div>
            <div className="profileRightBottom">
        <Feed />
        <Rightbar profile/>
        </div>
        </div>
        </div>
        </>
    )
}