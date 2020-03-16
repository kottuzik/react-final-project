import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { deleteUser, updateUser } from '../../utils';
import { useDispatch } from 'react-redux';

const UserCard = ({ userData }) => {
    const { _id, name, email, street, city, zipcode } = userData ;
    const history = useHistory();
    const [showOrHide, setShowOrHide] = useState(false);
    //const [hideOnMobile, setHideOnMobile] = useState(false);   

    const dispatch = useDispatch()

    const watchUser = (id) => {
        history.push(id);
        //setHideOnMobile('users-section borderTop mobileHide');
    }
    const handleDelete = (id) => {
        deleteUser(id)
        dispatch({type: "DELETEUSER", payload: id})
    }
    const handleUpdate = (id) => { 
        updateUser(userData)
        dispatch({type: "UPDATEUSER", payload: id});
       
    }
    return(
        <div className="user-card card">
            <div className="first-user-details">
                <label>Name: <input type="text" defaultValue={name} /></label>
                <label>Email: <input type="text" defaultValue={email} /></label>
            </div>
            <div className="navs">
               <button  className="btn blue" onClick={() => setShowOrHide(!showOrHide)}>Other Data</button>
               <button className="btn blue" onClick={() => watchUser(`/${_id}`)}>
                   Watch
                </button>
            </div>

           <div className={showOrHide ? "other-data" : "hide"}>   
                <div className="user-data">
                    <label>Street: <input type="text" defaultValue={street} /></label>
                    <label>City: <input type="text" defaultValue={city} /></label>
                    <label>Zipcode: <input type="text" defaultValue={zipcode} /></label>
                </div>
                <div className="navs">
                    <button className="btn blue" /* onClick={() => handleUpdate(_id)} */>Update</button>
                    <button className="btn red" onClick={() => handleDelete(_id)}>Delete User</button>
                </div>
           </div>

        </div>
    )
}

export default UserCard;