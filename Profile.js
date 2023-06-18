import React, { useState } from 'react';

const Profile = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordChangeSuccess, setPasswordChangeSuccess] = useState(false);

  const handlePasswordChange = (e) => {
    e.preventDefault();

    // Perform password change logic here, e.g., making an API request to update the password

    // Reset the form fields and set a flag to indicate password change success
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setPasswordChangeSuccess(true);
  };

  return (
    <div>
      <h2>Profile</h2>

      {/* Display a success message if password change was successful */}
      {passwordChangeSuccess && <p>Password changed successfully!</p>}

      <form onSubmit={handlePasswordChange}>
        <div>
          <label>Current Password:</label>
          <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
        </div>
        <div>
          <label>New Password:</label>
          <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default Profile;
