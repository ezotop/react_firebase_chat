import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { privateRoutes, publicRoutes } from '../routes';
import { CHAT_ROUTE, LOGIN_ROUTE } from '../utils/consts';
import { useAuthState } from 'react-firebase-hooks/auth';

const AppRouter = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth) // Получаем самого пользователя, параметром хук принимает, тот обьект авторизации, который прокидывали через контекст
    // Если пользователь залогинен, то вернётся обьект с данными, а если не залогинен, то вернётся null

    return user ?
        (
            <Switch>
                {privateRoutes.map(({path, component}) => <Route key={path} path={path} component={component} exact />)}
                <Redirect to={CHAT_ROUTE} /> {/* В случае какого-то непонятного роута перекинет на страницу чата, если юзер авторизован */}
            </Switch>
        )
        :
        (
            <Switch>
                {publicRoutes.map(({path, component}) => <Route key={path} path={path} component={component} exact />)}
                <Redirect to={LOGIN_ROUTE} /> {/* В случае какого-то непонятного роута перекинет на страницу логина, если юзер не авторизован */}
            </Switch>
        )
};

export default AppRouter;