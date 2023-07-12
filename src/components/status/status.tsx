import { setStatus } from "../../features/profile";
import { useAppDispatch } from "../../app/hooks.ts";
import React from "react";
import {Input} from "../common/input.tsx";

interface StatusProps {
    statusText: string | null
}

export const Status = ({statusText}: StatusProps) => {
    const dispatch = useAppDispatch()
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => dispatch(setStatus(e.target.value))


    return (
        <Input
            name='status'
            placeholder='Write your status...'
            onBlur={handleBlur}
            label='Status'
            key={1}
            value={statusText}
        />
    )
};
