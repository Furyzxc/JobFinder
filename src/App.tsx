import { Navigation } from "./components/navigation";
import { PageRouter } from "./routes";
import { Header } from "./components/header/header.tsx";
import { useAppSelector } from "./app/hooks.ts";


const App = () => {
    const isAuth = useAppSelector(state => state.auth.isAuth)

    return (
        <div>
            { isAuth || <Header/> }
            <div className='App'>
                <Navigation/>
                <PageRouter/>
            </div>
        </div>
    )
}

export default App;
