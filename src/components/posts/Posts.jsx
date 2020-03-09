import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import PostCard from './PostCard';
import AddPost from './AddPost';

const Posts = ({ id }) => {
    const [showAdd, setShowAdd] = useState(false);

    const posts = useSelector(state => state.posts)

    let filterPosts = posts.filter(x => x.userId === id);

    return(
        <div className="posts borderTop">
            {showAdd ? <AddPost userId={id} setShowAdd={setShowAdd} /> :
            <div>
                <div className="flexWrap posts-title">
                    <h2 className="title">Posts</h2>
                <button className="btn blue" onClick={() => setShowAdd(true)}>Add New Post</button>
                </div>
                
                {filterPosts.map(post => <PostCard key={post._id} post={post} />)}
               
            </div>
            }
        </div>
    )
}
export default Posts;