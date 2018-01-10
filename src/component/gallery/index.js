
import React from "react"
import { connect } from 'react-redux';
import { getPhotos } from "../../actions/galleryActions"

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhotos: (photos) => {
      fetch("https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=97c6b42d5eefc6430d81dc7371335004&user_id=131519498%40N07&extras=url_m&format=json&nojsoncallback=1")
        .then(data => data.json())
        .then(data => dispatch(getPhotos(data.photos.photo)))
    }
  }
}

class Gallery extends React.Component {

  componentDidMount(){
    console.log("sdfsd;flk");
    this.props.fetchPhotos()
  }

  render() {  
    return (
      <div>
        {
          this.props.photos
            .filter((el, i) => i <= 10 )
            .map((el, i) => (
              <img className="gallery-item" src={el.url_m} key={i}/>))
        }
      </div>
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