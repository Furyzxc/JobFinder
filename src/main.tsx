import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './style/index.css'
import './style/reset.css'
import {Provider} from "react-redux";
import {store} from "./services/store.ts";
import {BrowserRouter} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
)
