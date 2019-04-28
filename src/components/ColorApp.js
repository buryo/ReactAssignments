import React, { Component } from 'react';
import iro from '@jaames/iro';

import '../App.css';


class ColorApp extends Component {

    componentDidMount() {
        // Create a new color picker instance
        var colorPicker = new iro.ColorPicker(".colorPicker", {
            // color picker options
            // Option guide: https://iro.js.org/guide.html#color-picker-options
            width: 280,
            color: "#ffffff",
            borderWidth: 1,
            borderColor: "#fff",
        });

        colorPicker.on(["color:init", "color:change"], function (color) {
            // Show the current color in different formats
            // Using the selected color: https://iro.js.org/guide.html#selected-color-api
            document.getElementById('colorHex').innerHTML = [
                color.hexString,
            ];
        });
    }


    render() {
        return (
            <div className="Component" style={{ textAlign: "center" }}>
                <h1 id="colorHex">#ffffff</h1>
                <div className="colorPicker"></div>
            </div>
        );
    }
}

export default ColorApp;