import {
  GET_PHOTOS, SHOW_TEN_MORE_POHTOS, TOGGLE_LIGHTBOX, SET_CURRENT_PHOTO
} from "../actions/galleryActions"

const initialState = {
  numShowing : 10,
  photos: [],
  currentPhoto: 0,
  error: "",
  lightboxOpen : true
}

const galleryReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_PHOTOS : {
      state = {
        ...state,
        photos: action.payload
      }
      return state
    }
    case SHOW_TEN_MORE_POHTOS : {
      state =  {
        ...state, 
        numShowing: state.numShowing + 10
      }
      return state
    }
    case TOGGLE_LIGHTBOX : {
      state = {
        ...state,
        lightboxOpen : !state.lightboxOpen
      }
      return state
    }
    case SET_CURRENT_PHOTO : {
      state = {
        ...state,
        currentPhoto : action.payload
      }
      return state
    }
    default : {
      return state;
    }
  }
}

export default galleryReducer