import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from '../Components/SignIn'
import Home from '../Components/Home'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={SignIn} exact/>
                <Route path="/loggedIn" component={Home}/>
            </Switch>
        </div>
    </BrowserRouter>
)

// BrowserRouter can only have one child (div) - acts like a component that links to other components
//exact prop - match exactly otherwise all other pages with '/' will render the SignIn component
// Switch - once the first match of the path is found, only render that component (exclusive rendering)

export default AppRouter;