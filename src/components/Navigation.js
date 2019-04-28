import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/color-app">Kleur Hexa opdracht</Link>
                </li>
                <li>
                    <Link to="/filtering-array">Filtering</Link>
                </li>
                <li>
                    <Link to="/os-detector">Detect device</Link>
                </li>
                <li>
                    <Link to="/copy-app">Copy URL with button</Link>
                </li>
                <li>
                    <Link to="/kebab-case">Camelcase to Kebab-Case</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;