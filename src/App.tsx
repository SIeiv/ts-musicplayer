import './App.css'
import NavBar from "./components/NavBar/NavBar.tsx";
import Content from "./components/Content/Content.tsx";
import Player from "./components/Player/Player.tsx";
import {BrowserRouter} from "react-router-dom";

const App = () => (
    <BrowserRouter>
        <div className={"App"}>
            <NavBar/>
            <div className={"content-player"}>
                <Content/>
                <Player/>
            </div>
        </div>
    </BrowserRouter>
);

export default App
