import MainEn from "./components/MainEn";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import MainFa from "./components/MainFa";

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"} component={MainEn}/>
                    <Route exact path={"/fa"} component={MainFa}/>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
