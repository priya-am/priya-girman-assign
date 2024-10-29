import React, { useState } from 'react';
import placeholder from '../assets/placeholder.png';
import UserDialog from './UserDialog';

const UserCard = ({ user }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
        <div className="user-card">
            <img src={placeholder} alt="User" />
            <h2>{user.first_name} {user.last_name}</h2>
            <p>{user.city}</p>
            <p>{user.contact_number}</p>
            <button onClick={() => setIsDialogOpen(true)}>Fetch Details</button>

            {isDialogOpen && (
                <UserDialog user={user} onClose={() => setIsDialogOpen(false)} />
            )}
        </div>
    );
};

export default UserCard;
