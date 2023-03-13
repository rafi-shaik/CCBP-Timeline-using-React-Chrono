// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {details} = props
  console.log(details)
  const {courseTitle, description, duration, tagsList} = details

  return (
    <>
      <div className="header">
        <h1 className="course-name">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle className="clock-icon" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="tags-list">
        {tagsList.map(each => (
          <li className="tag-item">
            <p className="tag-name">{each.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseTimelineCard
