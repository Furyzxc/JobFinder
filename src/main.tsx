import ReactDOM from 'react-dom/client'
import {SocialNetworkApp} from './app/social-network-app.tsx'
import './style/index.css'
import './style/reset.css'
import {Provider} from "react-redux";
import {store} from "./app/store.ts";
import {BrowserRouter} from "react-router-dom";
import { ThemeProvider} from "@mui/material";
import {theme} from "./style/theme/theme.ts";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <SocialNetworkApp/>
            </Provider>
        </ThemeProvider>
    </BrowserRouter>,
)
