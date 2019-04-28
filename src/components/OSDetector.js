import React from 'react';
import '../App.css';

const OSDetector = () => {

    const OSNames = [
        "Windows NT 10.0",
        "Windows NT 6.2",
        "Windows NT 6.1",
        "Windows NT 6.0",
        "Windows NT 5.1",
        "Windows NT 5.0",
        "Mac",
        "X11",
        "Linux"
    ]

    const UserOSName = OSNames.filter((item, i) => window.navigator.userAgent.indexOf(OSNames[i]) !== -1).join();

    return (
        <div className="Component">
            <pre className="codeLookLike">
                    // Array of Operating Systems<br/>
                    const OSNames = [
                        "Windows NT 10.0",
                        "Windows NT 6.2",
                        "Windows NT 6.1",
                        "Windows NT 6.0",
                        "Windows NT 5.1",
                        "Windows NT 5.0",
                        "Mac",
                        "X11",
                        "Linux"
                    ]
                    <br/><br/>
                    // Solution<br/>
                    const UserOSName = OSNames.filter((item, i) => window.navigator.userAgent.indexOf(OSNames[i]) != -1).join();
            </pre>
            <h1>{UserOSName}</h1>
        </div>
    );
}

export default OSDetector;