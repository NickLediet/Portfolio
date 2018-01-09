import {  createMuiTheme } from 'material-ui/styles';
import Brand from "./Brand"

const theme = createMuiTheme({
  palette : {
    background : {
      contentFrame: "#000"
    }
  },
  typography : {
    fontFamily : Brand.fonts.GothamMed,
    display1 : {
      fontFamily : Brand.fonts.GothamBold 
    }
  }
})


export default theme