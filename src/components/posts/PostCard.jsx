import React from 'react';

const PostCard = ({ post }) => (
    <div className="post-card card">
        <div className="text">Title: {post.title}</div>
        <div className="text">body: {post.body}</div>
    </div>
)
export default PostCard;