// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {details} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = details

  return (
    <div className="project-card">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="header">
        <h1 className="project-name">{projectTitle}</h1>
        <div className="project-duration">
          <AiFillCalendar className="calender-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a className="anchor-tag" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
