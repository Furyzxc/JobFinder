import { Navigation } from "./components/navigation";
import { PageRouter } from "./routes";
import { Header } from "./components/header";


const App = () => {
    return (
        <div>
            <Header />
        <div className='App'>
            <Navigation/>
            <PageRouter/>
        </div>
        </div>
    )
}

export default App;
