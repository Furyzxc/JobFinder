import {Input} from "../common/input.tsx";
import {useAppDispatch} from "../../app/hooks.ts";
import  {FocusEvent} from "react";
import {setSearchingTerm} from "../../features/paginator/paginator-slice.ts";

export const Search = () => {
    const dispatch = useAppDispatch()
    const handleBlur = (e: FocusEvent<HTMLInputElement>) => dispatch(setSearchingTerm(e.target.value))

    return (
        <div className='searchContainer'>
            <Input name='search' placeholder='Search' label='Search' value={''} key={2} onBlur={handleBlur}/>
        </div>
    );
};