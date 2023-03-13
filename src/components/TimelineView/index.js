// Write your code here
import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderCards = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard key={item.id} details={item} />
    }
    return <ProjectTimelineCard key={item.id} details={item} />
  }

  return (
    <div className="chrono-container">
      <div className="responsive-container">
        <div className="header-container">
          <h1 className="main-heading">
            MY JOURNEY OF <br /> <span className="span-heading">CCBP 4.0</span>
          </h1>
        </div>
        <Chrono
          theme={{
            secondary: 'white',
          }}
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
        >
          {timelineItemsList.map(eachItem => renderCards(eachItem))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
