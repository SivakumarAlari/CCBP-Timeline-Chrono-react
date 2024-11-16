import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  console.log(courseDetails)

  return (
    <div className="course-container">
      <h1 className="website-title">{courseTitle} </h1>
      <div className="duration-container">
        <AiFillClockCircle />
        <p className="duration-paragraph">{duration} </p>
      </div>
      <p className="description">{description} </p>
      <ul className="buttons-container">
        {tagsList.map(eachBtn => (
          <li className="each-btn">
            <button className="tab-btn" type='button'>
              <p> {eachBtn.name}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
