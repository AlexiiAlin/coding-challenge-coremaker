import React from 'react';
import './Login.css';

interface LoginProps {
  isLoggedIn: boolean;
  children?: any;
  history?: any;
}

function Login(props: LoginProps) {
  if (props.isLoggedIn) {
    props.history.push('/profile');
  }
  return (
    <div>
      {props.children}
    </div>
  );
}
export default Login;
