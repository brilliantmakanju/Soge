const { createTheme } = require("@mui/material");

const theme = createTheme({
    typography:{
        fontSize: 14
    },
    palette: {
        primary: {
            main: '#005555'
        }
    }
    

})


export { theme }