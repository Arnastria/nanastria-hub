import React from 'react';

import {
    Switch,
    Route,
    BrowserRouter as Router,
    Redirect,
    useParams,
    useRouteMatch,
    useHistory
} from "react-router-dom";
import { Home } from '../pages/home';
import { Profile } from '../pages/profile';

export function AppSwitch(props) {
    const history = useHistory();

    return (
        <Switch>
            <Route path="/profile">
                <Profile changePage={history.push} />
            </Route>
            <Route path="/">
                <Home changePage={history.push} />
            </Route>
        </Switch>

    );
}