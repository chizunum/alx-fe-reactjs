// src/UserProfile.jsx
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function UserProfile() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default UserProfile;
