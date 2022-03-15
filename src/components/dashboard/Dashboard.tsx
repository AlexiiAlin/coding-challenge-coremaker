import React from 'react';
import './Dashboard.css';
import {Link} from "react-router-dom";

function Dashboard(props: any) {
  return (
    <div>
      Welcome to the code challenge! <Link to={"/login"}>Login</Link> to get started.
    </div>
  );
}

export default Dashboard;
