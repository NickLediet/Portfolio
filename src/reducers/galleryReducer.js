import {
  GET_PHOTOS, SHOW_TEN_MORE_POHTOS
} from "../actions/galleryActions"

const initialState = {
  numShowing : 10,
  photos: [],
  currentPhoto: 0,
  error: ""
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
    default : {
      return state;
    }
  }
}

export default galleryReducer