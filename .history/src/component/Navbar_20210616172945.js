import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';
import { LOGIN_ROUTE } from '../utils/consts';
import { Context } from '..';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth) // Получаем самого пользователя, параметром хук принимает, тот обьект авторизации, который прокидывали через контекст
    // Если пользователь залогинен, то вернётся обьект с данными, а если не залогинен, то вернётся null

    return (
        <AppBar color={'secondary'} position="static">
            <Toolbar variant={'dense'}>
                <Grid container alignItems={'center'} justify={'flex-end'}>
                    {
                        user ?
                        <Button variant={'outlined'} onClick={() => auth.signOut()}>Exit</Button> // auth.signOut() Чтобы разлогиниться
                        :
                        <NavLink to={LOGIN_ROUTE}>
                            <Button variant={'outlined'}>Login</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;