import React from 'react'
import {
    Link,
} from "react-router-dom";

function ProfileCard() {
    return (
        <div>
            <div className="profile-pic card-header">
                <div className="img-div">
                    <img src="https://avatarfiles.alphacoders.com/715/thumb-1920-71560.jpg" alt="profile pic" />
                </div>
            </div>
            <div className="settings">
                <ul className='myList'>
                    <Link to='editprofile'><li className='list-item item-1'>Edit Profile</li></Link>
                    <Link to='addpost'><li className='list-item item-2'>Add Post</li></Link>
                    <Link to='myposts'><li className='list-item item-3'>My Posts</li></Link>
                    <Link to='savedposts'><li className='list-item item-4'>Saved Posts</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default ProfileCard
