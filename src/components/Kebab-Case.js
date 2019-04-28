import React from 'react';
import CopyButton from './CopyInput';

import '../App.css';


const KebabCase = () => {

    const inputHandler = (e) => {
        document.getElementById("textToCopy").value = e.target.value.replace(/\s+/g, '-');
    }

    const CopyButtonHandler = () => {
        let textToCopy = document.querySelector("#textToCopy");
        CopyButton(textToCopy.value);
    }

    return (
        <div className="Component" style={{ textAlign: "center" }}>
            <input onChange={(e) => inputHandler(e)} style={{ width: "300px", marginBottom: "20px" }}></input>

            <div>
                <input id="textToCopy" disabled={true} style={{ width: "300px" }}></input>
                <button onClick={CopyButtonHandler}>Copy!</button>
            </div>

        </div>
    );
}

export default KebabCase;