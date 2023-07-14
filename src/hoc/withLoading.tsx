import {ComponentType} from "react";
import {Preloader} from "../components/common";

export interface WithLoadingTypes {
    isLoading: boolean
}

export const withLoading = <T extends object>(Component: ComponentType<T>) => (props: WithLoadingTypes & T) => {
    const {isLoading, ...restProps} = props

    if (isLoading) return (
        <Preloader />
    )

    return <Component {...restProps as T} />
}