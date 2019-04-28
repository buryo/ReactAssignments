import React from 'react';
import swal from 'sweetalert';
import CopyButton from './CopyInput';

import '../App.css';

const CopyApp = () => {

    const CopyButtonHandler = () => {
        let textToCopy = document.querySelector("#textToCopy");
        CopyButton(textToCopy.value);
    }

    return (

        <div className="Component" style={{ textAlign: "center" }}>
            <input id="textToCopy" disabled={true} value={"https://github.com/buryo/ReactAssignments"} style={{ width: "40rem", height: "2rem", fontSize: "25px" }}></input>
            <button onClick={CopyButtonHandler}>Copy!</button>
        </div>
    );
}

export default CopyApp;