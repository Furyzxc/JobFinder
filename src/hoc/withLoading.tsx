import {ComponentType} from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export interface WithLoadingTypes {
    isLoading: boolean
}

export const withLoading = <T extends object>(Component: ComponentType<T>) => (props: WithLoadingTypes & T) => {
    const {isLoading, ...restProps} = props

    if (isLoading) return (
        <Box sx={{display: 'flex', position: 'absolute', top: '50%', left: '60%'}}>
            <CircularProgress/>
        </Box>
    )

    return <Component {...restProps as T} />
}