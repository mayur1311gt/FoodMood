import React from 'react'
import FullPost from './FullPost'

function Home() {
    return (
        <div className='home-container container'>
            <h2 className='my-5 ms-5'>Trending</h2>
            <div className="all-posts">
                <FullPost/>
                <FullPost/>
                <FullPost/>
                <FullPost/>
            </div>
        </div>
    )
}

export default Home
