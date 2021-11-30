import React from 'react'
import ProfilePost from './ProfilePost'

function SavedPosts() {
    return (
        <div>
            <h3 className='text-sec card-header'>Saved Posts</h3>
                    <div className="saved-posts">
                        <ProfilePost />
                        <ProfilePost />
                        <ProfilePost/>
                        <ProfilePost/>
                    </div>
        </div>
    )
}

export default SavedPosts
