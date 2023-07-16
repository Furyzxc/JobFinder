import {Link} from "react-router-dom";
import {useState} from "react";
import {Button} from "@mui/material";

export const NotFound = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <div>
                <Button variant='outlined' sx={{position: 'absolute', top: '50%', left: '47%', width: '143px'}}
                        onClick={() => setCount(prev => prev + 1)}>
                    {count}
                </Button>
            </div>
            <div>
                <Link className="homepage-btn" to='/profile'>Home page</Link>
            </div>
        </div>
    )
}