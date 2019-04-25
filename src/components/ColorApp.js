import React, { Component } from 'react';

import Color from '../App.css';
import { Header } from './Style';

class ColorApp extends Component {
    state = {
        color: '#ff0000',
    }

    colorSelected(e) {
        this.setState({ color: e.target.value });
    }



    render() {
        return (
            <div className={Color.App} style={Header}>
                {this.state.color && <h1>{this.state.color}</h1>}
                <input type="color" name="favcolor" value={this.state.color} onChange={(e) => this.colorSelected(e)} ></input>
            </div>
        );
    }
}

export default ColorApp;