import React, {useState} from 'react';
import './App.css';
import Login from "../login/Login";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Profile from "../profile/Profile";
import NavBar from "../nav-bar/NavBar";
import {GoogleLogin, GoogleLogout} from "react-google-login";
import {useDispatch} from "react-redux";
import {UsersActions} from "../../store/users/users-actions";

const clientId = "97413323003-t523ij14qp0k8cl626577poi1q712vpl.apps.googleusercontent.com";

function App() {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onLoginSuccess = (res: any) => {
    setIsLoggedIn(true);
    dispatch(UsersActions.setUserInfo(res.profileObj))
  };

  const onLoginFailure = (res: any) => {
    console.log('Login Failed:', res);
  };

  const onSignoutSuccess = () => {
    console.clear();
    setIsLoggedIn(false);
  };

  console.log('is logged in: ', isLoggedIn);

  return (
    <div className="App">
      <NavBar>
        { isLoggedIn &&
          <GoogleLogout
            clientId={clientId}
            buttonText="Sign Out"
            onLogoutSuccess={onSignoutSuccess}
          />
        }
      </NavBar>

      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route
              path="/profile"
              render={(props) => {
                return <Profile {...props} isLoggedIn={isLoggedIn}/>
              }}
            />

            <Route
              path="/login"
              render={(props) => {
                return (
                  <Login isLoggedIn={isLoggedIn} {...props}>
                    { !isLoggedIn ?
                      <GoogleLogin
                        clientId={clientId}
                        buttonText="Sign In"
                        onSuccess={onLoginSuccess}
                        onFailure={onLoginFailure}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                      /> : null}
                  </Login>
                )
              }}
            />
            <Redirect from="/" to="/login" />
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
