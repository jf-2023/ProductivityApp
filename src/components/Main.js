import React from "react";
import { useState, useEffect } from "react";

function Main(){
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState("");

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
        const newTasks = tasks.filter((task, index) => index !== key);
        setTasks(newTasks);
    };

    //To load tasks
    useEffect(() => {
        const savedTasks = localStorage.getItem('tasks');
        if(savedTasks){
            setTasks(JSON.parse(savedTasks));}
    }, [])    

    //To save tasks
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks])


    return (
    <div className="Todo-Container">
        <h1>Daily Tasks</h1>
        <form action="" className="Todo">
            <input type="text" value={text} className="add-todo" onChange={getText}/>
            <button className="add-button" onClick={onSubmit}>Add Task</button>
        </form>
            {tasks.map((task, key) => 
            (<div className='task-container' key={key}>
                <span>{task}</span>
                <button >Complete!</button>
                <button onClick={() => handleDelete(key)}>Delete</button>
            </div>))}
    </div>
)}

export default Main