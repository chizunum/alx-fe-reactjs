// ProfilePage.jsx
import React from 'react';
import UserDetails from './UserDetails';

const ProfilePage = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <UserDetails /> {/* No userData prop passed anymore */}
    </div>
  );
};

export default ProfilePage;
