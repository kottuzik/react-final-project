import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

const UserCard = ({ userData }) => {
    const { id, name, email, street, city, zipcode } = userData ;
    const history = useHistory();
    const [showOrHide, setShowOrHide] = useState(false)

    return(
        <div className="user-card">

            <div className="first-user-details">
                <label>Name: <input type="text" defaultValue={name} /></label>
                <label>Email: <input type="text" defaultValue={email} /></label>
            </div>
            <div className="navs">
               <button  className="btn blue" onClick={() => setShowOrHide(!showOrHide)}>Other Data</button>
               <button  className="btn blue" onClick={() => history.push(`/${id}`)}>Watch</button>
            </div>

           <div className={showOrHide ? "other-data" : "hide"}>
                <div className="user-data">
                    <label>Street: <input type="text" defaultValue={street} /></label>
                    <label>City: <input type="text" defaultValue={city} /></label>
                    <label>Zipcode: <input type="text" defaultValue={zipcode} /></label>
                </div>
                <div className="navs">
                    <button className="btn blue">Update</button>
                    <button className="btn red">Delete</button>
                </div>
           </div>

        </div>
    )
}

export default UserCard;