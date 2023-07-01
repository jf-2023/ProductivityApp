import React, { useState, useEffect } from "react";
import moment from 'moment';

function Todo({clock}){
    const currentDate = moment().format('MMMM Do (h:mm:ss A)');

    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);

    function getText(e) {
        setText(e.target.value);
    }

    function onSubmit(event){
        event.preventDefault();
        if (text.trim() !== '') {
            setTasks([...tasks, {text: text, completed: false, score: count}]);
            setText('');
            setCount(0);
        }
    }

    const filterTasks = tasks.filter(task => task.completed === true);
    const countDone = filterTasks.length;

    function handleComplete(key){
        const completeTasks = tasks.map((task, index) => {
            if (index === key){
                const newScore = task.completed ? 0 : 1;
                return {...task, completed: !task.completed, score: newScore};
            };
        return task;
        });
        setTasks(completeTasks);
    }


    function handleNew(){
        const resetTasks = tasks.map(task => ({ ...task, completed: false , score: tasks.score / count}));
        setTasks(resetTasks);
        setCount(count + 1);
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
        <h1 className="clock">
            {currentDate} (Day:
            <span className="count"> {count}</span> ) 
        </h1>
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
                    <label className="score">{task.score}%</label>
                    <button className="complete" onClick={() => handleComplete(key)}>Done</button>
                    <button className='trash' onClick={() => handleDelete(key)}>X</button>
                </div>
            </div>))}
            <figcaption className="tracker">{ countDone } / <strong>{ tasks.length }</strong></figcaption>
            <button className="reset" onClick={() => handleNew()}>New Day</button>
    </div>  
)}

export default Todo