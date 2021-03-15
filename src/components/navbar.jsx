import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <ul>
      <Link to='/' style={{textDecoration: 'none'}}>
        <li>Home</li>
        </Link>
      <Link to='/login' style={{textDecoration: 'none'}}>
        <li>Login</li>
        </Link>
        <Link to='/registrationform' style={{textDecoration: 'none'}}>
        <li>Registration</li>
        </Link>
        <Link to='/enrolmentform' style={{textDecoration: 'none'}}>
        <li>Enrolment</li>
        </Link>
        <Link to='/help' style={{textDecoration: 'none'}}>
        <li>Help</li>
        </Link>    
      </ul>
    </div>
  );
};

export default Navbar;
