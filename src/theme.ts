import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: "#222222"
        },
        text: {
            primary: "#ffffff"
        }
}});

export default theme;
