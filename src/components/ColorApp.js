import React, { Component } from 'react';
import ColorPicker from '../jscolor';

import '../App.css';

class ColorApp extends Component {
    state = {
        color: '#ff0000',
    }

    colorSelected(e) {
        this.setState({ color: e.target.value });
    }



    render() {
        return (
            <div className="Component" >
                <h1>TODO: Use a modern color picker</h1>
                {this.state.color && <h1 style={{ color: this.state.color }}>{this.state.color}</h1>}
                <input type="color" name="favcolor" value={this.state.color} onChange={(e) => this.colorSelected(e)} ></input>
                <input className="jscolor"></input>
            </div>
        );
    }
}

export default ColorApp;