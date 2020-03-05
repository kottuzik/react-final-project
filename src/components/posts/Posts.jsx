import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import PostCard from './PostCard';
import AddPost from './AddPost';

const Posts = ({ id }) => {
    const [showAdd, setShowAdd] = useState(false);

    const posts = useSelector(state => state.posts)

    let filterPosts = posts.filter(x => x.userId === id);

    return(
        <div className="posts">
            {showAdd ? <AddPost userId={id} setShowAdd={setShowAdd} /> :
            <div>
                <button className="btn blue" onClick={() => setShowAdd(true)}>Add New Post</button>
                {filterPosts.map(post => <PostCard key={post.id} post={post} />)}
            </div>
            }
        </div>
    )
}
export default Posts;