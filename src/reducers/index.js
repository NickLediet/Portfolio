import { combineReducers } from "redux"
import projectsReducer from "./projectsReducer"
import galleryReducer from "./galleryReducer";

const reducers = combineReducers({
  projects : projectsReducer,
  gallery : galleryReducer
})

export default reducers