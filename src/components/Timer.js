import React from "react";

function Timer({clock}){
    return(
        <div className="clock-container">
            <h1 className="clock">{clock}</h1>
        </div>
    )
}

export default Timer