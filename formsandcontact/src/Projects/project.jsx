import React from 'react';
import './projects.css';
const Project = props => {
    return(

        <div className="projectBody">
            <div className='projectText'>
                
            </div>
            <div className='projectImage'>
                <imgj src = {props.imgsrc} alt="Image" className ="project-image"/>
            </div>
        </div>

    );
}

export default Project;