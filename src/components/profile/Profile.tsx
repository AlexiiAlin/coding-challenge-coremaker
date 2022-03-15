import React from 'react';
import './Profile.css';
import {useSelector} from "react-redux";
import {AppState} from "../../store/app-state";
import {GeneralRow} from "../general-row/GeneralRow";
import {UserState} from "../../store/users/user-state";

interface ProfileProps {
  isLoggedIn: boolean;
  children?: any;
  history?: any;
}

const USER_INFO_LABELS: any = {
  email: 'Email',
  familyName: 'Family name',
  givenName: 'Given name',
  name: 'Name'
};

function Profile(props: ProfileProps) {
  if (!props.isLoggedIn) {
    props.history.push('/login');
  }
  const userInfo = useSelector((appState: AppState) => appState.user);

  const renderedProfile = userInfo && Object.keys(userInfo)
    .filter(userInfoKey => userInfoKey !== 'imageUrl' && userInfoKey !== 'googleId')
    .map(userInfoKey => {
      return (
        <GeneralRow
        key={userInfoKey}
        label={USER_INFO_LABELS[userInfoKey as keyof typeof USER_INFO_LABELS]}
        value={userInfo[userInfoKey as keyof UserState]}
      />)
    });

  return (
    <div className="flex-column">
      <img src={userInfo.imageUrl} className="profile-image" alt="logo" />
      {renderedProfile}
    </div>
  );
}

export default Profile;
