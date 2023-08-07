import { ReactNode } from "react";
import { Preloader } from "@/shared/ui/preloader/preloader.tsx";

export interface WithLoadingTypes {
  isLoading: boolean;
  children: ReactNode;
}

export const WithLoading = ({ isLoading, children }: WithLoadingTypes) => {
  if (isLoading) return <Preloader />;

  return <>{children}</>;
};
