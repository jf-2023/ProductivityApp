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
            setTasks([...tasks, {text: text, completed: false}]);
            setText('');
        }
    }

    function handleComplete(key){
        const completeTasks = tasks.map((task, index) => {
            if (index === key){
                return {...task, completed: !task.completed};
            };
        return task;
        });
        setTasks(completeTasks)
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
        <br/>
        <form action="" className="Todo">
            <input type="text" value={text} className="add-todo" onChange={getText}/>
            <button className="add-button" onClick={onSubmit}>Add Daily Task</button>
        </form>
            {tasks.map((task, key) => 
            (<div className='task-container' key={key}>
                <span className={task.completed ? 'completed-task':''}>
                    {task.text}
                </span>
                <div className="button-container">
                    <button className="complete" onClick={() => handleComplete(key)}>Done</button>
                    <button className='trash' onClick={() => handleDelete(key)}>X</button>
                </div>
            </div>))}
    </div>
)}

export default Main