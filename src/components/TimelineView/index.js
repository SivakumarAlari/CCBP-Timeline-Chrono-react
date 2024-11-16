import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    console.log(timelineItemsList)

    return (
      <div>
        <h1 className="journey-heading">
          MY JOURNEY OF CCBP 4.0
          <h1 className="ccbp-heading">CCBP </h1>
        </h1>
        <div className="chrono-container">
          <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
            {timelineItemsList.map(eachTime => {
              if (eachTime.categoryId === 'COURSE') {
                return <CourseTimelineCard courseDetails={eachTime} />
              }
              return <ProjectTimelineCard projectDetails={eachTime} />
            })}
          </Chrono>
        </div>
      </div>
    )
  }
}

export default TimelineView
