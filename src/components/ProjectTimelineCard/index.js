import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} =
    projectDetails

  console.log(projectDetails)

  return (
    <div>
      <img src={imageUrl} alt="project" className="imageUrlDesign" />
      <div className="container">
        <h1 className="project-title-heading">{projectTitle} </h1>
        <div className="calender-container">
          <AiFillCalendar className="react-icon-design " />
          <p className="calender-paragraph">{duration} </p>
        </div>
      </div>
      <p className="project-description ">{description} </p>
      <a href={projectUrl} className="anchorEl">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
