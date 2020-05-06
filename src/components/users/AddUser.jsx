import React, { useState } from 'react';
import { postUser } from '../../utils';
import { useDispatch } from 'react-redux';


const AddUser = () => {
    const [showOrHide, setShowOrHide] = useState(false);
    const[addUserSuccess, setAddUserSuccess] = useState('hide');
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
        postUser(forms, dispatch)
        .then(message =>{
            setAddUserSuccess(message)
            setTimeout(() =>{
                setForms({
                    name: '',
                    email: '',
                    street: '',
                    city: '',
                    zipcode: ''
                });
                setAddUserSuccess('hide');
            }, 1500)
        })
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
             <button className="btn blue onlyMobile"  onClick={() => setShowOrHide(!showOrHide)}>
                   ADD NEW USER
            </button>
            <form id="addUserForm" className={showOrHide ? "add-user-form" : "add-user-form mobileHide"}>
               <fieldset className="user-form">
               <legend className="add-user-title">Add New User</legend>
               <button className="close onlyMobile" aria-label={"close"} onClick={handleClose}>
                   &times;
                </button>
                    <ul className="form-list">
                        <li className="form-item">
                            <label>
                                Name: 
                                <input type="text" name="name" value={forms.name} onChange={handleChange} />
                            </label>
                        </li>
                        <li className="form-item">
                            <label>
                                Email: 
                                <input type="text" name="email" value={forms.email} onChange={handleChange} />
                            </label>
                        </li>
                        <li className="form-item">
                            <label>
                                Street: 
                                <input type="text" name="street" value={forms.street} onChange={handleChange} />
                            </label>
                        </li>
                        <li className="form-item">
                            <label>
                                City: 
                                <input type="text" name="city" value={forms.city} onChange={handleChange} />
                            </label>
                        </li>
                        <li className="form-item">
                            <label>
                                Zipcode: 
                                <input type="text" name="zipcode" value={forms.zipcode} onChange={handleChange} />
                            </label>
                        </li>
                    </ul>                
                    <div className="buttons-div">
                        <button className="btn blue" onClick={handleSubmit}>
                            Add
                        </button>
                        <button className="btn green" onClick={handleResetFields}>
                            Clear
                        </button>
                    </div>
                    <p className={addUserSuccess.cssClass}>
                        {addUserSuccess.title}
                    </p>
               </fieldset>
            </form>
        </div>
    )
}

export default AddUser;