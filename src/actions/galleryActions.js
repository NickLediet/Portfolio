
export const GET_PHOTOS = "GET_PHOTOS"
export const SHOW_TEN_MORE_POHTOS = "SHOW_TEN_MORE_PHOTOS"
export const TOGGLE_LIGHTBOX = "TOGGLE_LIGHTBOX"
export const SET_CURRENT_PHOTO = "SET_CURRENT_PHOTOS"

export const getPhotos = (data) => ({type : GET_PHOTOS, payload: data})
export const showTenMorePhotos = () => ({type: SHOW_TEN_MORE_POHTOS})
export const toggleLightbox = () => ({ type: TOGGLE_LIGHTBOX })
export const setCurrentPhoto = (index) => ({type: SET_CURRENT_PHOTO, payload : index})