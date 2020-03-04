import React, { useState } from 'react';

const UserCard = ({ userData }) => {
    const { id, name, email, street, city, zipcode, todos } = userData ;

    const [showOrHide, setShowOrHide] = useState(false)

    return(
        <div className="user-card">
           <label>Name: <input type="text" value={name} /></label>
           <label>Email: <input type="text" value={email} /></label>
           <button onMouseOver={() => setShowOrHide(true)}>Other Data</button>

           <div
            className={showOrHide ? "other-data" : "hide"}
            onClick={() => setShowOrHide(false)}
            >
                <label>Street: <input type="text" value={street} /></label>
                <label>City: <input type="text" value={city} /></label>
                <label>Zipcode: <input type="text" value={zipcode} /></label>

                <button>Update</button>
                <button>Delete</button>
           </div>

        </div>
    )
}

export default UserCard;