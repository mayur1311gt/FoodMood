import React from 'react'
import {
    Routes,
    Route,
    
} from "react-router-dom";

import AddPost from './profile/AddPost'
import EditProfile from './profile/EditProfile'
import MyPosts from './profile/MyPosts'
import ProfileCard from './profile/ProfileCard'
import SavedPosts from './profile/SavedPosts'



function Profile(props) {
   

    return (
        <>
            <div className='user-profile-container'>
                <div className="container p-5">
                    <div className="user-data flex-h mb-4">
                        <div className="left card">
                            <ProfileCard theUser={props.theUser}/>
                        </div>
                        <div className="right card">
                            <div className="card-header bg-sec text-dark">
                                <h3>{props.theUser['full_name']}</h3>
                            </div>
                            <div className="card-body flex-h a-center j-around">
                                <div className="square scale-me sq-1">
                                    <h5>Posts</h5><h3>5</h3>
                                </div>
                                <div className="square scale-me sq-2">
                                    <h5>Followers</h5><h3>20</h3>
                                </div>
                                <div className="square scale-me sq-3">
                                    <h5>Following</h5><h3>18</h3>
                                </div>
                                <div className="square scale-me sq-4">
                                    <h5>Saved Posts</h5><h3>8</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="create-post-section card">

                        <div>
                            <Routes>
                                <Route path="editprofile" element={<EditProfile theUser={props.theUser}/>}></Route>
                                <Route path="addpost" element={<AddPost />}></Route>
                                <Route path="myposts" element={<MyPosts theUser={props.theUser}/>}></Route>
                                <Route path="" element={<MyPosts theUser={props.theUser}/>}></Route>
                                <Route path="savedposts" element={<SavedPosts />}></Route>
                            </Routes>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
