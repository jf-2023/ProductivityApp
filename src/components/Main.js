import React from "react";
import { useState } from "react";

function Main(){
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState("");
    const [count, setCount] = useState("");

    function getText(e) {
        setText(e.target.value);
    }

    function onSubmit(event){
        event.preventDefault();
        if (text.trim() !== '') {
            setTasks([...tasks, text])
            setText('')
        }
    }

    function handleDelete(key){
        const newTasks = [...tasks];
        newTasks.splice(key, 1);
        setTasks(newTasks)
    }

    return (
    <div className="Todo-Container">
        <h1>Daily Tasks</h1>
        <form action="" className="Todo">
            <input type="text" value={text} className="add-todo" onChange={getText}/>
            <button className="add-button" onClick={onSubmit}>Add Task</button>
        </form>
            {tasks.map((task, key) => 
            (<div className='task-container' key={key}>
                <span style={{ textDecoration: count % 2 == 0 ? 'line-through' : '' }}>{task}</span>
                <button onClick={() => setCount(count + 1)}>Complete!</button>
                <button onClick={() => handleDelete({key})}>Delete</button>
            </div>))}
    </div>
)}

export default Main