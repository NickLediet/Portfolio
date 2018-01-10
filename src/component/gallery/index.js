
import React from "react"
import { connect } from 'react-redux';
import { getPhotos, showTenMorePhotos } from "../../actions/galleryActions"
import {  BodyType, Header2 } from "../../styles/Typeography"
import { SectionContainer, Button } from '../../styles/SiteTools';
import Brand from "../../styles/Brand"
import LightBox from "./Lightbox"
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhotos: (photos) => {
      fetch("https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=97c6b42d5eefc6430d81dc7371335004&user_id=131519498%40N07&extras=url_m&format=json&nojsoncallback=1")
        .then(data => data.json())
        .then(data => dispatch(getPhotos(data.photos.photo)))
    },
    showMorePhotos: () => dispatch(showTenMorePhotos())
  }
}
const GalleryContainer = SectionContainer.extend`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    letter-spacing: 2px;
  }

  a {
    text-transform: uppercase;
    color: #333;
    font-size: 1em;
  }

  .site-header {
    text-align: center;
    padding-top: -20px;
  }

  #gallery-container {
    margin: 0 auto;
    columns: 250px 2;
    -webkit-columns: 250px 2;
    -moz-columns: 250px 2;
    column-gap: 5px;
    -moz-column-gap: 5px;
    padding-top: 15px;
    max-width: 100%;
    overflow: normal;
    @media(min-width: ${Brand.sizes.desktop}) {
        max-width: 66%;
    }
  }
  #gallery-container .gallery-item {
    width: 100%;
    height: auto;
    cursor: pointer;
    filter: grayscale(50%);
    @media(min-width: ${Brand.sizes.desktop}) {
      width: 100%;
    }
  }
  #gallery-container .gallery-item:hover {
    animation: changeFilter 500ms forwards ease-out;
  }
  @keyframes changeFilter {
    0% {
      filter: grayscale(50%);
    }
    100% {
      filter: grayscale(0%);
    }
  }
  #gallery-container .gallery-item.isActive {
    width: 720px;
  }



`
class Gallery extends React.Component {

  componentDidMount(){
    console.log("sdfsd;flk");
    this.props.fetchPhotos()
  }

  render() {  
    return (
      <GalleryContainer>  
          <Header2 upper>Photography</Header2>
          <BodyType>I consider myself a hobbiest photographer.  I am experienced with editing and various work flow.  More importantly I find it a relaxing way to stay creative.</BodyType>
        <div id="gallery-container">
          {
            this.props.photos
              .filter((el, i) => i <= this.props.numShowing )
              .map((el, i) => (
                <img className="gallery-item" src={el.url_m} key={i}/>))
          }
        </div>
        <Button onClick={() => this.props.showMorePhotos()}>See More!</Button>
      </GalleryContainer>
    )
  }
}
 export default connect(state => state.gallery, mapDispatchToProps)(Gallery);

/**
 * TODO: 
 *  - Map state to props
 *  - on init of window api call to 10 photos
 *  - pass down state to children
 * 
 */