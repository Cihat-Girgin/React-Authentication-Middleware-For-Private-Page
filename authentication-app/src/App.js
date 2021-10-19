import 'bootstrap/dist/css/bootstrap.min.css';
import PublicPage from "./pages/public-page"
import LoginPage from "./pages/login-page"
import AdminPage from "./pages/admin-page"
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact  path="/" render={(props) => <PublicPage {...props}/>}/>
                    <Route exact  path="/login" render={(props) => <LoginPage {...props}/>}/>
                    <Route exact  path="/admin" render={(props) => <AdminPage {...props}/>}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
