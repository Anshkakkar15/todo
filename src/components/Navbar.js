import React from 'react';
import './Navbar.css';
import { Link ,useLocation } from "react-router-dom";
import { useEffect} from 'react';

export default function Navbar(props) {
    let location = useLocation();
    useEffect(() => {
        // console.log(location.pathname)
    }, [location]);
    return (
        <div>
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn">
                    <i className="fas fa-bars"></i>
                </label>
                <Link to="/" className="logo">{props.title}</Link>
                <ul>
                    <li><Link className={`${location.pathname==='/'?'active':''}`} to="/">Home</Link></li>
                    <li><Link className={`${location.pathname==='/about'?'active':''}`} to="/about">About</Link></li>
                </ul>
            </nav>
        </div>
    )
}
