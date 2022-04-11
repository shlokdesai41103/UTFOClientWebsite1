import React from 'react';
import './projects.css';
const Project = props => {
    return(

        <div className="projectBody">
            <div className='projectText'>
                <h3 className='projectTitle'>Title</h3>
                <h8 className='projectDescription'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et tenetur perferendis odit eum, illo ratione aperiam, quisquam officiis veritatis rerum ex, exercitationem excepturi a pariatur dolorum quod recusandae doloribus aspernatur?</h8>
            </div>
            <div className='projectImage'>
                <imgj src = {props.imgsrc} alt="Image" className ="project-image"/>
            </div>
        </div>

    );
}

export default Project;