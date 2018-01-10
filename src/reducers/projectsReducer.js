import {
  ADD_FILTER_TAG, REMOVE_FILTER_TAG, GET_ALL_PROJECTS, ERROR_GENERATED
} from "../actions/projectActions"

const initialState = {
  allProjects : [],
  activeTags : [],
  error : "",
}

const projectsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_FILTER_TAG : {
      // TODO: ADD A TAG TO STATE
      break;
    }
    case REMOVE_FILTER_TAG : {
      // TODO: REMOVE TAG FROM STATE
      break;
    }
    case GET_ALL_PROJECTS : {
      // TODO: ADD TODOS TO STATE OR ERROR
      state = {
        ...state,
        projects : action.payload
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
    default : {
      return state;
    }
  }
}

export default projectsReducer