import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postPost } from '../../utils'



const AddPost = ({ userId, setShowAdd }) => { 
    const [state, setState] = useState({ userId: userId, title: '', body: '' });
    const [postSuccess, setPostSuccess] = useState(false);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value});
    }

    const addTo = () => {
        postPost(state, dispatch);
        setPostSuccess(!postSuccess);
       
        setTimeout(() =>{
            setShowAdd(false);
        }, 1000)
    }

    return(
        <React.Fragment>
            <div className="add-post flex">
                <label>
                    Title: 
                    <input type="text" name="title" onChange={handleChange} />
                </label>
                <label>
                Body:
                    <input type="text" name="body" onChange={handleChange} />
                </label>
                    <div className="navs">
                        <button className="btn blue" onClick={addTo}>
                            Add
                        </button>
                        <button className="btn red" onClick={() => setShowAdd(false)}>
                            Cancel
                        </button>
                    </div>            
            </div>
            <p className={postSuccess ? "message success" : "hide"}>Your Post Added</p>
        </React.Fragment>
    )
}

export default AddPost;