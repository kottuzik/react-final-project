import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const UserCard = ({ userData }) => {
    const { id, name, email, street, city, zipcode } = userData ;

    const [showOrHide, setShowOrHide] = useState(false)

    return(
        <div className="user-card card">
            <div className="first-user-details">
                <label>Name: <input type="text" defaultValue={name} /></label>
                <label>Email: <input type="text" defaultValue={email} /></label>
            </div>
            <div className="navs">
                <Link to={`/${id}`}>GO</Link>
               <button  className="btn blue" onClick={() => setShowOrHide(!showOrHide)}>Other Data</button>
            </div>

           <div className={showOrHide ? "other-data" : "hide"}>
                <div className="user-data">
                    <label>Street: <input type="text" defaultValue={street} /></label>
                    <label>City: <input type="text" defaultValue={city} /></label>
                    <label>Zipcode: <input type="text" defaultValue={zipcode} /></label>
                </div>

                <button className="btn blue">Update</button>
                <button className="btn red">Delete</button>
           </div>

        </div>
    )
}

export default UserCard;