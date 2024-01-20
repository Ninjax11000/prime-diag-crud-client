import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Navbar = () => {
    const {user,logOut}=useContext(AuthContext);
    const handleLogOut = ()=>{
        logOut()
        .then(alert('logout success!'))
        .catch(error=>console.log(error.message))
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">Prime Diagnostic</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/register'>Register</Link></li> 
                    <li><Link to='/bookings'>Bookings</Link></li> 
                </ul>
            </div>
            <div className="navbar-end">
                {user && <p>{user.email}</p>}
               {user &&  <button onClick={handleLogOut} className='btn btn-warning'>Logout</button>}
            </div>
        </div>
    );
};

export default Navbar;