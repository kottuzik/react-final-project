import React, { useState } from 'react';
import { postUser } from '../../utils';
import { useDispatch } from 'react-redux';

const AddUser = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        street: '',
        city: '',
        zipcode: ''
    })
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setForms({...forms, [e.target.name]: e.target.value})
    }

    const handleSubmit = () => {
        postUser(forms)
        .then(user => dispatch({type: "ADDUSER", payload: user}));
    }

    return(
        <div className="add-user">
               <label>
                Name: 
                <input type="text" name="name" onChange={handleChange} />
            </label>
            <label>
                Email: 
                <input type="text" name="email" onChange={handleChange} />
            </label>
            <label>
                Street: 
                <input type="text" name="street" onChange={handleChange} />
            </label>
            <label>
                City: 
                <input type="text" name="city" onChange={handleChange} />
            </label>
            <label>
                Zipcode: 
                <input type="text" name="zipcode" onChange={handleChange} />
            </label>
                <div className="buttons-div">
                    <button className="btn blue" onClick={handleSubmit}>Add</button>
                    <button className="btn red">Cancel</button>
                </div>
        </div>
    )
}

export default AddUser;