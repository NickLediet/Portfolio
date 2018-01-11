import React from "react"
import styled from "styled-components"
import {connect} from "react-redux"
import { getAllProjects, addProjectTags, addFilterTag, removeFilterTag } from "../../actions/projectActions"
import { Header2, BodyType } from "../../styles/Typeography"
import { SectionContainer } from "../../styles/SiteTools"
import Brand from "../../styles/Brand"
import Project from "./Project"

const linkStyle = {
  color : "#242D57",
  textDecoration : "underline"
}

const ProjectsContainer = SectionContainer.extend`
  p {
    text-align: center;
  }
  .tag-container {
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-bottom: 25px;
    justify-content: center;
  }
  @media(min-width: ${Brand.sizes.tablet}) {
      .project-container {
        display: flex;
        flex-direction:row;
        flex-wrap : wrap;
        justify-content: center;
        div {
          margin: 25px;
        }
    }
  }
`

const containsAnElement = (sourceArray, compareArray) => {
  var containsElement = false
  var currentElement = 0
  do {
    containsElement = compareArray.includes(sourceArray[currentElement])
    
    if(currentElement > sourceArray.length) {
      break
    } else {
      currentElement++
    }
  } while(!containsElement)
    
  return containsElement
}

const Tag = styled.span`
  background: ${props => props.active ? Brand.colors.redGradient : "#fff"};
  border: 3px solid ${Brand.colors.red};
  color: ${props => props.active ? "#fff" : Brand.colors.red};
  cursor: pointer;
  font-size: 1.5em;
  margin: 5px;
  padding: 10px;
  border-radius: 20px;
`

const mapDispatchToProps = (dispatch) => ({
  setAllProjectsAndTags : () => {
    fetch("/projects")
      .then(data => data.json())
      .then(data => {
        console.log(data)
        const { projects, tags } = data
        dispatch(addProjectTags(tags))
        dispatch(getAllProjects(projects))
      })
  },
  addTag : (tag) => dispatch(addFilterTag(tag)),
  removeTag : (tag) => dispatch(removeFilterTag(tag)) 
})
class Projects extends React.Component {
  componentDidMount() {
    this.props.setAllProjectsAndTags() 
  }
  toggleTag(tag)  {
    this.props.activeTags.includes(tag) ?
      this.props.removeTag(tag) :
      this.props.addTag(tag)
  }
  render() {
    return (
      <ProjectsContainer>
        <Header2>Projects</Header2>
        <BodyType>
          Here are some projects that I have worked on :) <br /> Feel free to pick a tag to filter them Checkout out my <a style={linkStyle}href="https://github.com/NickLediet">Github</a> to see more code
        </BodyType>
        <div className="tag-container">
        {
          this.props.tags ? 
            this.props.tags.map(
              (el, i) => (<Tag onClick={() => this.toggleTag(el)}
                            active={this.props.activeTags.includes(el)}
                            key={i}>{el}</Tag>)
            ) : null
        }
        </div>
        <div className="project-container">
          {
            /* WELCOME TO THE FUN */
            this.props.allProjects ?
              this.props.activeTags.length > 0 ?
                this.props.allProjects.filter(el => 
                  containsAnElement(el.tags, this.props.activeTags))
                    .map((el, i) => (<Project project={el} key={i}/>))  :
                this.props.allProjects.map((el, i) => (<Project project={el} key={i} {...this.props}/>)) 
              : null
          }
        </div>
      </ProjectsContainer>
    )
  }
}

export default connect(state => state.projects, mapDispatchToProps)(Projects);