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