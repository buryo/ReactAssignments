import React from 'react';
import {Link} from "react-router-dom";
import nav from '../nav.css';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">JS ColorCodes</Link>
                </li>
                <li>
                    <Link to="/Media">Filtering</Link>
                </li>
                <li>
                    <Link to="/detect">Detect device</Link>
                </li>
                <li>
                    <Link to="/copy-url">Copy Url button</Link>
                </li>
                <li>
                    <Link to="/kebab">CamelCase</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;

