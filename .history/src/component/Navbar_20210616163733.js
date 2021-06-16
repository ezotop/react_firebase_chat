import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';
import { LOGIN_ROUTE } from '../utils/consts';

const Navbar = () => {
    const user = true
    return (
        <AppBar color={'secondary'} position="static">
            <Toolbar variant={'dense'}>
                <Grid container justify={'flex-end'}>
                    {
                        user ?
                        <Button variant={'outlined'}>Exit</Button>
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