import ReactDOM from "react-dom/client";
import "@/shared/style/index.css";
import { Provider as ReduxProvider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { appRouter } from "./appRouter.tsx";
import { appStore } from "./appStore.ts";
import { authMe } from "@/slices/auth";
import { appTheme } from "@/shared/style/theme/theme.ts";

const root = document.getElementById("root") as HTMLElement;

const initApp = async () => {
  await appStore.dispatch(authMe());
};

initApp().then(() => {
  ReactDOM.createRoot(root).render(
    <ThemeProvider theme={appTheme}>
      <ReduxProvider store={appStore}>
        <RouterProvider router={appRouter} />
      </ReduxProvider>
    </ThemeProvider>,
  );
});
