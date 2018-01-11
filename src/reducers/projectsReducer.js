import {
  ADD_FILTER_TAG, REMOVE_FILTER_TAG, GET_ALL_PROJECTS, ERROR_GENERATED, ADD_PROJECT_TAGS
} from "../actions/projectActions"

const initialState = {
  allProjects : [],
  activeTags : [],
  tags : [],
  error : "",
}

const projectsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_FILTER_TAG : {
      state = {
        ...state,
        activeTags : [
          ...state.activeTags,
          action.payload
        ]
      }
      return state;
    }
    case REMOVE_FILTER_TAG : {
      state = {
        ...state,
        activeTags : state.activeTags.filter( el =>
          el != action.payload )
      }
      return state
    }
    case GET_ALL_PROJECTS : {
      state = {
        ...state,
        allProjects : action.payload
      }
      return state
    }
    case ERROR_GENERATED : {
      state = {
        ...state,
        error: action.err
      }
      return state
    }
    case ADD_PROJECT_TAGS : {
      state = {
        ...state,
        tags : action.payload
      }
      return state;
    }
    default : {
      return state;
    }
  }
}

export default projectsReducer