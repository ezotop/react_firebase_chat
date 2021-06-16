import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { privateRoutes, publicRoutes } from '../routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';

const AppRouter = () => {
    const user = false
    return user ?
        (
            <Switch>
                {privateRoutes.map(({path, component}) => <Route path={path} component={component} exact />)}
                <Redirect to={CHAT_ROUTE} /> {/* В случае какого-то непонятного роута перекинет на страницу чата, если юзер авторизован */}
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, component}) => <Route path={path} component={component} exact />)}
                <Redirect to={LOGIN_ROUTE} /> {/* В случае какого-то непонятного роута перекинет на страницу логина, если юзер не авторизован */}
            </Switch>
        )
};

export default AppRouter;