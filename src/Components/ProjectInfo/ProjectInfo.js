import styles from './ProjectInfo.module.css';

const ProjectInfo = props => {
    
    
    return (
        <div className={styles.dataContainer}>
            <div className={styles.dataRow}>
                <h1>{props.projectData.Name}</h1>
                <h3>{props.projectData.ShortDescription}</h3>
                <hr/>
            </div>

            <div className={styles.dataRow}>
                <p>{props.projectData.Overview}</p>
            </div>

            <h4>Made With</h4>
            <div className={`${styles.dataRow} ${styles.linkRow}`}>
                {
                    props.projectData.Tags.map((item, i) => {
                        return <a href={Object.values(item)[0]} target="_blank" rel="noreferrer" className={styles.tag}>{Object.keys(item)}</a>
                    })
                }
            </div>

            <h4>Links</h4>
            <div className={`${styles.dataRow} ${styles.linkRow}`}>
                {
                    props.projectData.Links.map((item, i) => {
                        return <a href={Object.values(item)[0]} target="_blank" rel="noreferrer" className={styles.link}>{Object.keys(item)}</a>
                    })
                }
            </div>            

            <div className={styles.bottomSpacer} />
        </div>
    )
}

export default ProjectInfo;