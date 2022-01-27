import { useState } from "react";

import styles from './Work.module.css';

// Imports our ProjectInfo component and the data it needs
import ProjectInfo from '../ProjectInfo/ProjectInfo';
const workData = require('../../json/work.json')


const Work = props => {
    // Keeps track of what project is selected
    const [projectId, setProjectId] = useState(null);
    const selectProject = (id) => {
        setProjectId(id);
    }

    return (
        <div className={styles.container}>
            {/* Left column of page (top on mobile) */}
            <div className={styles.left}>
                <h2 className={styles.workTitle}>Projects</h2>
                {
                    // Creates a button for each project in the JSON file
                    workData.map((work, i) => {
                        return (
                        <div className={styles.projectButton} onClick={() => selectProject(i)}>
                            <h3>{workData[i].Name}</h3>
                            <p>{workData[i].ShortDescription}</p>
                        </div>
                        )
                    })
                }
            </div>
            
            {/* Vertical page break */}
            <div className={ styles.verticalLine } />

            {/* Right column of page (bottom on mobile) */}
            <div className={styles.right}>
                {/* Uses a ternary to show a project here when selected otherwise shows a CTA message */}
                {
                    projectId === null ?
                    <h3 className={styles.getStarted}>Select a project to view</h3> :
                    <ProjectInfo projectData={workData[projectId]} key={projectId}></ProjectInfo>
                }
            </div>
        </div>
    )
}

export default Work;