import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Button from './Button';
import './TaskInfo.css'

const TaskDetails = () => {
    const params =useParams()

    const navigate = useNavigate()

    const handleBackButtonClick = () => {
        navigate(`/`);
    }

    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo est odio officiis exercitationem, quaerat incidunt qui. Ducimus omnis sit iusto eius, repudiandae qui error alias magnam impedit, quia quibusdam porro.
                </p>
            </div>
        </>
     );
}
 
export default TaskDetails;