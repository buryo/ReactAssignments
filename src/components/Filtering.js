import React from 'react';
import '../App.css';

const Filtering = (props) => {

    const sortedArray = props.arrayToFilter.sort()
        .filter((item, index, array) => array.indexOf(item) !== index);

    return (
        <div className="Component">
            <pre className="codeLookLike">
                    // Array itself<br/>
                    const arrayToFilter = ['BMW', 'Audi', 'Seat', 'Opel', 'BMW', 'Opel'];
                    <br/><br/>
                    // Solution<br/>
                    const sortedArray = props.arrayToFilter.sort()
                    .filter((item, index, array) => array.indexOf(item) !== index);
            </pre>
            {sortedArray.map(item => <li key={item}>{item}</li>)}
        </div>
    );
}

export default Filtering;