import React, { Component} from 'react';


class ColorCode extends Component{

    render() {
        return(
            <div className={ColorCode}>
                <input type="color" value="col" onChange={this.ColorSelected}></input>;
            </div>
        );
    }
}

export default ColorCode;