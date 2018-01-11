import React from "react"
import styled from "styled-components"
import Brand from "../../styles/Brand"
import {
  Header3, BodyType
} from "../../styles/Typeography"

const CardContainer = styled.div`
  margin-bottom: 25px;
  overflow: hidden;
  border-radius: 10px;
  width: 100% ;
  height: auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 6px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  border: 1px solid ${Brand.colors.grey};
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  img {
    width:100%;
  }

  h3 {
    padding: 5px 10px;
    text-align:center;
  }

  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 25px;
  }

  p {
    padding: 5px 10px;
  }

  @media(min-width: ${Brand.sizes.tablet}) {
    width: 30%;
    p {
      width: 90%;
      padding-bottom: 25px;
    }
  }
`
const Tag = styled.span`
  background: ${props => props.active ? Brand.colors.redGradient : "#fff"};
  border: 3px solid ${Brand.colors.red};
  color: ${props => props.active ? "#fff" : Brand.colors.red};
  cursor: pointer;
  font-size: 1em;
  margin: 5px;
  border-radius: 20px;

  padding: 10px;
  @media(min-width: ${Brand.sizes.desktop}) {
    font-size: 1.25em;
  }
`

const Project = (props) => {
  return (
    <CardContainer>
      <a href={props.project.link}>
        <img src={props.project.thumbnail_url} />
      </a>
      <Header3>{props.project.title}</Header3>
      <div>
        {
          props.project.tags.map((el,i ) => (<Tag active key={i}>{el}</Tag>))
        }
      </div>
      <BodyType>{props.project.description}</BodyType>
    </CardContainer>
  )
}
export default Project