import styles from './ProjectInfo.module.css';

const ProjectInfo = props => {
    
    return (
        <div className={styles.dataContainer}>
            {/* Project title and short description */}
            <div className={styles.dataRow}>
                <h1>{props.projectData.Name}</h1>
                <h3>{props.projectData.ShortDescription}</h3>
                <hr/>
            </div>

            {/* A relatively comprehensive description of the project */}
            <div className={styles.dataRow}>
                <p>{props.projectData.Overview}</p>
            </div>

            {/* Buttons with links to the tech the site was built on */}
            <h4>Made With</h4>
            <div className={`${styles.dataRow} ${styles.linkRow}`}>
                {
                    // For each item in the array adds a button with a link
                    props.projectData.Tags.map((item, i) => {
                        return <a href={Object.values(item)[0]} target="_blank" rel="noreferrer" className={styles.tag}>{Object.keys(item)}</a>
                    })
                }
            </div>

            {/* Buttons that link to sites relating to said project (ex, github or the live site, not the tech behind it) */}
            <h4>Links</h4>
            <div className={`${styles.dataRow} ${styles.linkRow}`}>
                {
                    // For each item in the array adds a button with a link
                    props.projectData.Links.map((item, i) => {
                        return <a href={Object.values(item)[0]} target="_blank" rel="noreferrer" className={styles.link}>{Object.keys(item)}</a>
                    })
                }
            </div>            

            {/* A spacer that shows on mobile so the mobile nav doesn't cover any of the info */}
            <div className={styles.bottomSpacer} />
        </div>
    )
}

export default ProjectInfo;