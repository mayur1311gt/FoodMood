import React from 'react'
import ProfilePost from './ProfilePost'

function MyPosts() {
    return (
        <div>
            <h3 className='text-tert card-header'>My Posts</h3>
                    <div className="all-posts">

                        <ProfilePost />
                        <ProfilePost />
                        <ProfilePost />
                        <ProfilePost/>

                    </div>
        </div>
    )
}

export default MyPosts
