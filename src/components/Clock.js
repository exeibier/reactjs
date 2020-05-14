import React, { Component } from 'react'; //Extraemos el componente desde la importacion


function Clock() {
    return (
        <div>
            <p>Son las {new Date().toLocaleTimeString()} </p>
        </div>
    )
}

export default Clock;


