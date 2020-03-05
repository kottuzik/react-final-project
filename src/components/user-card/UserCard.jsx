import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const UserCard = ({ userData }) => {
    const { id, name, email, street, city, zipcode } = userData ;

    const [showOrHide, setShowOrHide] = useState(false)

    return(
        <div className="user-card">
           <label>Name: <input type="text" defaultValue={name} /></label>
           <label>Email: <input type="text" defaultValue={email} /></label>
           <Link to={`/${id}`}>GO</Link>
           <button onMouseOver={() => setShowOrHide(true)}>Other Data</button>

           <div
            className={showOrHide ? "other-data" : "hide"}
            onClick={() => setShowOrHide(false)}
            >
                <label>Street: <input type="text" defaultValue={street} /></label>
                <label>City: <input type="text" defaultValue={city} /></label>
                <label>Zipcode: <input type="text" defaultValue={zipcode} /></label>

                <button>Update</button>
                <button>Delete</button>
           </div>

        </div>
    )
}

export default UserCard;