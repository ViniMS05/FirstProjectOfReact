import React from 'react';
import { FiTrash2, FiInfo } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import "./Task.css"

const Task = ({task, handleTaskClick, handleTaskDeletion}) => {
    const history = useNavigate();

    const handleTaskDetailsClick = () => {
		history(`/${task.title}`);
	};

    return ( 
        <div 
        className="task-container" 
        style={task.completed ? {borderLeft: "6px solid chartreuse"} : {}}
        > 
            <div 
            className="task-title" 
            onClick={() => handleTaskClick(task.id)}
            >
                {task.title}
            </div>    

            <div 
            className="buttons-container"
            >
                <button className='view-info-button'
                onClick={handleTaskDetailsClick}
                >
                    <FiInfo />
                </button>

                <button 
                className='remove-task-button' 
                onClick={() => handleTaskDeletion(task.id)}
                >
                 <FiTrash2 />
                </button>
            </div>
        </div>
    );
        // <div className='task-container'>{task.title}</div>
}
 
export default Task;