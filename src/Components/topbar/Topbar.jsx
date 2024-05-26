import React from 'react'
import "./Topbar.css"
import { Search, Person, Chat, Notifications } from '@mui/icons-material'
import SearchBar from '../search'

export default function Topbar() {
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className='logo'>Snapgram</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                  <Search />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                    <a href="/profile"> <Person /></a>
                    </div>
                    {/* <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge"></span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge"></span>
                    </div> */}
                </div>
               <a href="/login"><img src='../src/images/person/1.jpeg' alt='an image of a girl' className='topbarImg'/></a>
            </div>
        </div>
    )
}