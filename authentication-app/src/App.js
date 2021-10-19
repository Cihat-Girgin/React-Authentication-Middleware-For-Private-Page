import 'bootstrap/dist/css/bootstrap.min.css';
import PublicPage from "./pages/public-page"
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact  path="/" render={(props) => <PublicPage {...props}/>}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
