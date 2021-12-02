import React from 'react'
import ProfilePost from './ProfilePost'

function MyPosts() {
    return (
        <div>
            <h3 className='text-sec card-header'>My Posts</h3>
                    <div className="all-posts">

                        <ProfilePost food_image_url={'/images/home/food1.jpg'} user_image_url={'/images/home/user1.jpg'} post_name={'Boiled Eggs'}/>
                        <ProfilePost food_image_url={'/images/home/momos.jpg'} user_image_url={'/images/home/user1.jpg'} post_name={'Momos'}/>
                        <ProfilePost food_image_url={'/images/home/noodles.jpg'} user_image_url={'/images/home/user1.jpg'} post_name={'Noodles'}/>
                        <ProfilePost food_image_url={'/images/home/tandoori_chicken.jpg'} user_image_url={'/images/home/user1.jpg'} post_name={'Tandoori Chicken'}/>

                    </div>
        </div>
    )
}

export default MyPosts
