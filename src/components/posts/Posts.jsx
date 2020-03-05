import React from 'react';
import { useSelector } from 'react-redux';

import PostCard from './PostCard';

const Posts = ({ id }) => {
    const posts = useSelector(state => state.posts)

    let filterPosts = posts.filter(x => x.userId === id);

    return(
        <div className="posts">
            {filterPosts.map(post => <PostCard post={post} />)}
        </div>
    )
}

export default Posts;