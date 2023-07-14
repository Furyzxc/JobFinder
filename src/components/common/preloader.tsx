import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export const Preloader = () => {
    return (
        <Box sx={{display: 'flex', position: 'absolute', top: '50%', left: '60%'}}>
            <CircularProgress/>
        </Box>
    );
}