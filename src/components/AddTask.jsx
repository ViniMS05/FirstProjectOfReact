import React, { useState } from 'react';
import "./AddTask.css";

import Button from './Button';


const AddTask = ({ handleTaskAddition }) => {
    const [inputData, setInputData] = useState('');

    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData('');
    }

    function handleAddTaskKey() {
        document.addEventListener('keypress', (event) => {
            const keyName = event.key

            if(keyName === 'Enter') {
                handleAddTaskClick()
            }
        })
    }

    return ( 
        <div className='add-task-container'>
            <input 
                onKeyDown={handleAddTaskKey}
                onChange={handleInputChange} 
                value={inputData} 
                type="text" 
                className='add-task-input'
            />
            
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    );
}
 
export default AddTask;