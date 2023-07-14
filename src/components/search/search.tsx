import {Input} from "../common/input.tsx";
import {useAppDispatch, useAppSelector} from "../../app/hooks.ts";
import {FocusEvent} from "react";
import {setFriend, getFriend, setSearchingTerm} from "../../features/paginator";
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import React from 'react'

export const Search = React.memo(() => {
    const dispatch = useAppDispatch()
    const friend = useAppSelector(getFriend)

    const handleIconClick = () => dispatch(setFriend(!friend))
    const handleBlur = (e: FocusEvent<HTMLInputElement>) => dispatch(setSearchingTerm(e.target.value))


    return (
        <div className='searchContainer'>
            <Input name='Search' value={''} key={2} onBlur={handleBlur} />
            {/*// @ts-ignore*/}
            <GroupRoundedIcon variant='outlined' fontSize='small'
                              sx={{color: friend ? '#265D97' : 'white', mt: '20px', ml: '10px'}}
                              onClick={handleIconClick}/>
        </div>
    )
});