import React, { useState } from 'react';
import { postUser } from '../../utils';
import { useDispatch } from 'react-redux';


const AddUser = () => {
    const [showOrHide, setShowOrHide] = useState(false);
    const dispatch = useDispatch();

    const [forms, setForms] = useState({
        name: '',
        email: '',
        street: '',
        city: '',
        zipcode: ''
    })

    const handleChange = (e) => {
        e.preventDefault();
        setForms({...forms, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postUser(forms)
        .then(user => dispatch({type: "ADDUSER", payload: user}));
       
    }
    const handleResetFields = (e) =>{
        e.preventDefault();
        setForms({
            name: '',
            email: '',
            street: '',
            city: '',
            zipcode: ''
        })
    }
    const handleClose = (e) =>{
        e.preventDefault();
        setShowOrHide(!showOrHide);
    }

    return(
        <div className="add-user">
            <button className="btn blue"  onClick={() => setShowOrHide(!showOrHide)}>ADD NEW USER</button>
            <form id="addUserForm" className={showOrHide ? "add-user-form" : "hide"}>
                <button className="close" ariaLabel="close" onClick={handleClose}>&times;</button>
                <label>
                    Name: 
                    <input type="text" name="name" value={forms.name} onChange={handleChange} />
                </label>
                <label>
                    Email: 
                    <input type="text" name="email" value={forms.email} onChange={handleChange} />
                </label>
                <label>
                    Street: 
                    <input type="text" name="street" value={forms.street} onChange={handleChange} />
                </label>
                <label>
                    City: 
                    <input type="text" name="city" value={forms.city} onChange={handleChange} />
                </label>
                <label>
                    Zipcode: 
                    <input type="text" name="zipcode" value={forms.zipcode} onChange={handleChange} />
                </label>
                <div className="buttons-div">
                    <button className="btn blue" onClick={handleSubmit}>Add</button>
                    <button className="btn red" onClick={handleResetFields}>Cancel</button>
                </div>
            </form>
        </div>
    )
}

export default AddUser;