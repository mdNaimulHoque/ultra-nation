import React from 'react';

const Country = (props) => {
    console.log(props)
    return (
        <div>
            <h4>This is a {props.name}</h4>
        </div>
    );
};

export default Country;