
export const GET_ALL_PROJECTS = "GET_ALL_PROJECTS"
export const ERROR_GENERATED = "ERROR_GENERATED"
export const ADD_FILTER_TAG = "ADD_FILTER_TAG"
export const REMOVE_FILTER_TAG = "REMOVE_FILTER_TAG"
export const ADD_PROJECT_TAGS = "ADD_PROJECT_TAGS"

export const getAllProjects = (payload) => ({ type: GET_ALL_PROJECTS, payload : payload})
export const addFilterTag = (tag) =>
  ({ type: ADD_FILTER_TAG, payload: tag })
export const removeFilterTag = (tag) =>
  ({ type: REMOVE_FILTER_TAG, payload: tag })
export const addProjectTags = (payload) => ({ type: ADD_PROJECT_TAGS, payload: payload })