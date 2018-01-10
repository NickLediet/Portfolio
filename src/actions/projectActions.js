
export const GET_ALL_PROJECTS = "GET_ALL_PROJECTS"
export const ERROR_GENERATED = "ERROR_GENERATED"
export const ADD_FILTER_TAG = "ADD_FILTER_TAG"
export const REMOVE_FILTER_TAG = "REMOVE_FILTER_TAG"

  export const getAllProjects = () => {
    // TODO: Get data via fetch 
    return async dispatch => {
      function onSuccess(success) {
        dispatch({ type: GET_ALL_PROJECTS, payload : success})
        return success
      }
      function onError(error) {
        dispatch({ type: ERROR_GENERATED, error })
        return error
      }
  
      try {
        const data = await fetch("").then(data => data.json())
        return onSuccess(data)
      } catch (error) {
        return onError(error)
      }
    }
  }

export const addFilterTag = (tag) =>
  ({ type: ADD_FILTER_TAG, payload: tag })

export const removeFilterTag = (tag) =>
  ({ type: REMOVE_FILTER_TAG, payload: tag })
