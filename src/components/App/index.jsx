import React from 'react'
import { Provider } from 'react-redux';
import Nav from 'components/Nav'
import SignIn from 'pages/SignIn'
import SignUp from 'pages/SignUp'
import Home from 'pages/Home'
import MyProfile from 'pages/MyProfile'
import PrivateRoute from 'components/PrivateRoute'
import store from 'store'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';


const App = () => {

    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Nav />
                    <main className="p-5">
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/register">
                                <SignUp />
                            </Route>
                            <Route path="/login">
                                <SignIn />
                            </Route>
                            <PrivateRoute path="/profile" component={MyProfile} exact />
                        </Switch>
                    </main>
                </div>
            </Router>
        </Provider >
    )
}


export default App
