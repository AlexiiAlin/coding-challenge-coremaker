import React from 'react';
import './Profile.css';

interface ProfileProps {
  isLoggedIn: boolean;
  children?: any;
  history?: any;
}

function Profile(props: ProfileProps) {
  if (!props.isLoggedIn) {
    props.history.push('/login');
  }
  return (
    <div className="Profile">
      Profile works!
    </div>
  );
}

export default Profile;
