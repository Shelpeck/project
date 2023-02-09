import React from 'react';
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <button>
                Logout
            </button>
            <button>Change profile</button>
        </div>
    );
};

export default Navbar;