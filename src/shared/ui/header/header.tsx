import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const Header = () => {
    return (
        <Button variant='outlined' sx={{position: 'absolute', top: '0', right: '5%'}}>
            <Link to='/login' style={{color: '#1976D2', textDecoration: 'none'}}>
                Sign in
            </Link>
        </Button>
    )
}