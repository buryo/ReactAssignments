import React from 'react';
<<<<<<< HEAD
import {Link} from "react-router-dom";
import nav from '../nav.css';
=======
import { Link } from "react-router-dom";
>>>>>>> 137b3bc8ca29739dffc0b5cd6cf030df7dadc8a1

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
<<<<<<< HEAD
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

=======
                    <Link to="/color-app">Kleur Hexa opdracht</Link>
                </li>
                <li>
                    <Link to="/filtering-array">Filtering</Link>
                </li>
                <li>
                    <Link to="/OS-detector">Detect device</Link>
                </li>
                <li>
                    <Link to="/contact">Copy URL with button</Link>
                </li>
                <li>
                    <Link to="/contact">Camelcase to Kebab-Case</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;
>>>>>>> 137b3bc8ca29739dffc0b5cd6cf030df7dadc8a1
