
export const GET_PHOTOS = "GET_PHOTOS"
export const SHOW_TEN_MORE_POHTOS = "SHOW_TEN_MORE_PHOTOS"
export const TOGGLE_LIGHTBOX = "TOGGLE_LIGHTBOX"
// export const getPhotos = () => {
//   // TODO: Get data via fetch 
//   return async dispatch => {
//     function onSuccess(success) {
//       dispatch({ type: GET_PHOTOS, payload : success})
//       return success
//     }
//     function onError(error) {
//       dispatch({ type: "ERROR_GENERATED", error })
//       return error
//     }

//     try {
//       const data = await fetch("https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=97c6b42d5eefc6430d81dc7371335004&user_id=131519498%40N07&extras=url_l&format=json&nojsoncallback=1").then(data => data.json())
//       return onSuccess(data)
//     } catch (error) {
//       return onError(error)
//     }
//   }
// }

export const getPhotos = (data) => ({type : GET_PHOTOS, payload: data})


export const showTenMorePhotos = () => ({type: SHOW_TEN_MORE_POHTOS})

export const toggleLightbox = () => ({ type: TOGGLE_LIGHTBOX })