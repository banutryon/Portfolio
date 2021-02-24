import {createMuiTheme} from "@material-ui/core/styles";

// Palette
const myBlue = "#3d405b";
const myGreen = "#81b29a";
const myOrange = "#f2cc8f";
const myOffWhite = "#f4f1de";
const myGrayBlue = "#8d99ae";
const myGreenBlue = "#0f4c5c";



export default createMuiTheme({
    palette: {
        common: { blue: `${myBlue}`, green: `${myGreen}`},
        primary: { main: `${myBlue}`},
        secondary: { main: `${myGreenBlue}`},
    }, 
    typography: {
        p: {}, 
        h1: {},
        body1: {
            maxWidth: "45ch",
        },
    },
    button: {
        marginLeft: "2.5rem",
        backgroundColor: myBlue,
        color: "#fff",
        borderRadius: "30px",
        height: "30px",
        padding: "15px",
        fontSize: "1rem",
    }
})