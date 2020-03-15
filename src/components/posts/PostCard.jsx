import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../utils'

const PostCard = ({ post }) => {
    const dispatch = useDispatch();

    const handleDeletePost = () => {
        deletePost(post._id)
        dispatch({ type: "DELETEPOST", payload: post._id })
    }

  return (
    <div className="post-card card">
        <p className="text"><span className="bold">Title:</span> {post.title}</p>
        <p className="text"><span className="bold">body:</span> {post.body}</p>
        <div className="navs">
            <button className="btn red" onClick={handleDeletePost}>Delete Task</button>
        </div>
    </div>
  )
}
export default PostCard;