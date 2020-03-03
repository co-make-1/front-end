import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import {Link} from 'react-router-dom';


const Nav = () => {

  const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.reload();
    }

  return (
  

  <div className="nav">
    <h1>Co-Make</h1>
    <div className="nav-link"> 
      
      <NavLink className="link" key={'001'} to={'/category'}>
        <HomeIcon className="link-icon" alt="logo" />
        <div>Home</div>
      </NavLink>

      <NavLink className="link" key={'002'} to={'/issueList'}>
        <SpeakerNotesIcon className="link-icon" alt="logo" />
        <div>Issues</div>
      </NavLink>
      
      
      <Link to='/login'>
        <button className="login">Login</button>
        </Link>
     

        <button className="logout" onClick={handleLogout}>Logout</button>

       

    </div>
  </div>
)};

export default Nav;