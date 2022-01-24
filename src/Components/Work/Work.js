import { useState } from "react";

import styles from './Work.module.css';

import ProjectInfo from '../ProjectInfo/ProjectInfo';

const workData = require('../../json/work.json')


const Work = props => {
    const [projectId, setProjectId] = useState(null);
    const selectProject = (id) => {
        setProjectId(id);
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
            <h2 className={styles.workTitle}>Projects</h2>
                {
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

            <div className={ styles.verticalLine } />

            <div className={styles.right}>
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