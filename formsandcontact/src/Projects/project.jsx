import React from 'react';
import './projects.css';
const Project = props => {
    return(

        <div className="projectBody">
            <div className='projectText'>
                <h3 className='projectTitle'>{props.title}</h3>
                <h8 className='projectDescription'>{props.description}</h8>
            </div>
            <div className='projectImage'>
                <imgj src = {props.imgsrc} alt="Image" className ="project-image"/>
            </div>
        </div>

    );
}

export default Project;