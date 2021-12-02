import React from 'react'
import ProfilePost from './ProfilePost'

function SavedPosts() {
    return (
        <div>
            <h3 className='text-tert card-header'>Saved Posts</h3>
            <div className="saved-posts">
                <ProfilePost food_image_url={'/images/home/noodles.jpg'} user_image_url={'/images/home/user1.jpg'} post_name={'Noodles'} />
                <ProfilePost food_image_url={'/images/home/tandoori_chicken.jpg'} user_image_url={'/images/home/user1.jpg'} post_name={'Tandoori Chicken'} />
            </div>
        </div>
    )
}

export default SavedPosts
