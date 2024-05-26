import React from "react";
import "./rightbar.css"

export default function Rightbar({profile}) {

    const HomeRightbar = () => {
        <>
            <div className="birthdayContainer">
                    <img className="birthdayImg" src="../src/images/gift.png" alt="Birthday image" />
                    <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends</b> have their birthday today</span>
                </div>
                <img className="rightbarAd" src="../src/images/ad.png" alt="Ad image" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="../src/images/person/3.jpeg" alt="profile pic" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Jaden Smith</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="../src/images/person/3.jpeg" alt="profile pic" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Jaden Smith</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="../src/images/person/3.jpeg" alt="profile pic" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Jaden Smith</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="../src/images/person/3.jpeg" alt="profile pic" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Jaden Smith</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="../src/images/person/3.jpeg" alt="profile pic" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Jaden Smith</span>
                    </li>
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="../src/images/person/3.jpeg" alt="profile pic" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Jaden Smith</span>
                    </li><li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="../src/images/person/3.jpeg" alt="profile pic" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Jaden Smith</span>
                    </li><li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="../src/images/person/3.jpeg" alt="profile pic" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Jaden Smith</span>
                    </li><li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="../src/images/person/3.jpeg" alt="profile pic" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Jaden Smith</span>
                    </li><li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="../src/images/person/3.jpeg" alt="profile pic" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Jaden Smith</span>
                    </li>
                </ul>
        </>
    }

    const ProfileRightbar = () => {
        return (
            <>
               <h4 className="rightbarTitle" >User Information</h4>
               <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Name:</span>
                    <span className="rightbarInfoValue">Willow Smith</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">New York</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Madrid</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
                </div> 
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="../src/images/person/1.jpeg" alt="Person following" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Jaden Smith</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="../src/images/person/2.jpeg" alt="Person following" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">June May</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="../src/images/person/3.jpeg" alt="Person following" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">nancy Adiola</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="../src/images/person/4.jpeg" alt="Person following" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Rosy Roselvet</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="../src/images/person/5.jpeg" alt="Person following" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mary Mirriam</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="../src/images/person/6.jpeg" alt="Person following" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Jane Doe</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="../src/images/person/9.jpeg" alt="Person following" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Tracy Johnson</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="../src/images/person/8.jpeg" alt="Person following" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Joe Biden</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className="rightbar">
           <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRightbar/>}
            </div> 
        </div>
    )
}