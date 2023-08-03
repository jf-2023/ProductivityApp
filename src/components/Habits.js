import React, {useState} from "react";

export default function Habits(){
    const [count, setCount] = useState(0) 

    function increase(){
        setCount(count + 1);
    }

    return(
    <div className="stones">
      <div className="stone mind"> 
        <div>{count}</div>
        <div>
        <button onClick={() => increase()}></button>
        </div>
      </div>
      <div className="stone power">
        <p>{count}</p>
        <button onClick={() => increase()}></button>
      </div>
      <div className="stone space">
        <button> DONE </button>
      </div>
      <div className="stone time">
        <button> DONE </button>
      </div>
      <div className="stone reality">
        <button> DONE </button>
      </div>
      <div className="stone soul">
        <button> DONE </button>
      </div>
    </div>
    );
}