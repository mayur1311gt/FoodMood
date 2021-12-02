import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams
} from "react-router-dom";

import AddPost from './profile/AddPost'
import EditProfile from './profile/EditProfile'
import MyPosts from './profile/MyPosts'
import ProfileCard from './profile/ProfileCard'
import SavedPosts from './profile/SavedPosts'



function Profile() {
    
    return (
        <>
            <div className='user-profile-container'>
                <div className="container p-5">
                    <div className="user-data flex-h mb-4">
                        <div className="left card">
                            <ProfileCard />
                        </div>
                        <div className="right card">
                            <div className="card-header bg-sec">
                                <h3>Prathmesh Waghmode</h3>
                            </div>
                            <div className="card-body flex-h a-center j-around">
                                <div className="square sq-1">
                                    <h5>Posts</h5><h3>5</h3>
                                </div>
                                <div className="square sq-2">
                                    <h5>Followers</h5><h3>20</h3>
                                </div>
                                <div className="square sq-3">
                                    <h5>Following</h5><h3>18</h3>
                                </div>
                                <div className="square sq-4">
                                    <h5>Saved Posts</h5><h3>8</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="create-post-section card">

                        <div>
                            <Routes>
                                <Route path="editprofile" element={<EditProfile />}></Route>
                                <Route path="addpost" element={<AddPost />}></Route>
                                <Route path="myposts" element={<MyPosts />}></Route>
                                <Route path="" element={<MyPosts />}></Route>
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
