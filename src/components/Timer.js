import React, { useState } from "react";

function Timer(){
    let time = new Date().toLocaleTimeString();
    const [clock, setClock] = useState(time) ;
    
    const updateTime = () => {
        let newTime = new Date().toLocaleTimeString();
        setClock(newTime);
    }

    setInterval(updateTime, 1000);

    return (
        <div>
            <div className="time_container">
                <h1 className="time">{ time }</h1>
            </div>
            <button className="time_button">click Me!</button>
        </div>
    )
}

export default Timer