import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { deleteUser, userUpdate } from '../../utils';
import { useDispatch } from 'react-redux';

const UserCard = ({ todos, userData, active, setActiveCard }) => {
    const { _id, name, email, street, city, zipcode } = userData ;
    const history = useHistory();
    const [showOrHide, setShowOrHide] = useState(false);
    const dispatch = useDispatch()
    const incompleteCount = todos.filter(t => t.completed === false).length;

    const [form, setForm] = useState({
        _id: _id,
        name: name,
        email: email,
        city: city,
        zipcode: zipcode,
        street: street
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const watchUser = (id) => {
        history.push(`/${id}`);
        setActiveCard(id); 
    }
    
    const handleDelete = (id) => {
        deleteUser(id)
        dispatch({type: "DELETEUSER", payload: id})
    }

    const handleUpdate = () => {
        userUpdate(userData._id, form)
        dispatch({ type: 'UPDATEUSER', payload: userData._id })
    }
   
    return(
        <div 
            className={
                (incompleteCount > 0) && active ? "user-card card current-card" 
                :
                (incompleteCount > 0) && !active ? "user-card card marked-card" 
                :
                (incompleteCount <= 0) && !active ? "user-card card" 
                : 
                "user-card card current-card"
            }
        >       
            <label>Name: <input name="name" type="text" defaultValue={name} onChange={handleChange} /></label>
            <label>Email: <input name="email" type="text" defaultValue={email} onChange={handleChange}/></label>
            <div className="flex">
                <p> Number of tasks: {todos.length} </p>

                <p className="space-left">Incomplete: <span className="bold">
                    {incompleteCount}</span></p>
            </div>
                
            <div className="navs">
               <button  className="btn blue" onClick={() => setShowOrHide(!showOrHide)}>
                   Other Data
                </button>
               <button className="btn blue" onClick={() => watchUser(_id)}>
                   Watch
                </button>
            </div>

           <div className={showOrHide ? "other-data" : "hide"}>   
                <div className="user-data">
                    <label>Street: <input name="street" type="text" defaultValue={street} onChange={handleChange} /></label>
                    <label>City: <input name="city" type="text" defaultValue={city} onChange={handleChange} /></label>
                    <label>Zipcode: <input name="zipcode" type="text" defaultValue={zipcode} onChange={handleChange} /></label>
                </div>
                <div className="navs">
                    <button className="btn blue" onClick={() => handleUpdate()}>
                        Update
                    </button>
                    <button className="btn red" onClick={() => handleDelete(_id)}>
                        Delete User
                    </button>
                </div>
           </div>

        </div>
    )
}

export default UserCard;