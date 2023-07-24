import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import s from './search.module.css'
import { useAppDispatch, useAppSelector } from "@/app/hooks.ts";
import { getFriend, setFriend, setSearchingTerm } from "@/slices/paginator";
import { Input } from "@/shared/ui/input/input.tsx";
import { FocusEvent } from 'react'

export const Search = () => {
    const dispatch = useAppDispatch()
    const friend = useAppSelector(getFriend)

    const handleIconClick = () => dispatch(setFriend(!friend))
    const handleBlur = (e: FocusEvent<HTMLInputElement>) => dispatch(setSearchingTerm(e.target.value))


    return (
        <div className={s.searchContainer}>
            <Input name='Search' value={''} key={2} onBlur={handleBlur} />
            {/*// @ts-ignore*/}
            <GroupRoundedIcon variant='outlined' fontSize='small'
                              sx={{color: friend ? '#265D97' : 'white', mt: '20px', ml: '10px'}}
                              onClick={handleIconClick}/>
        </div>
    )
}