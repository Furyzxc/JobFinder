import { ComponentType } from "react";
import { Preloader } from "@/shared/ui/preloader/preloader.tsx";

export interface WithLoadingTypes {
    isLoading: boolean
}

export const withLoading = <T extends object>(Component: ComponentType<T>) => (props: WithLoadingTypes & T) => {
    const {isLoading, ...restProps} = props

    if (isLoading) return (
        <Preloader/>
    )

    return <Component {...restProps as T} />
}