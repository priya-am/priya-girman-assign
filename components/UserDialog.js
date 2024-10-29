import React from 'react';

const UserDialog = ({ user, onClose }) => (
    <div className="dialog-overlay">
        <div className="dialog">
            <button onClick={onClose}>Close</button>
            <h2>{user.first_name} {user.last_name}</h2>
            <p><strong>City:</strong> {user.city}</p>
            <p><strong>Contact Number:</strong> {user.contact_number}</p>
        </div>
    </div>
);

export default UserDialog;
