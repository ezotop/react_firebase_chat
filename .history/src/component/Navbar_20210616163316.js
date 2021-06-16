import React from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';

const Navbar = () => {
    const user = true
    return (
        <AppBar color={'secondary'} position="static">
            <Toolbar>
                <Grid container justify={'flex-end'}>
                    {
                        user ?
                        <Button variant={'outlined'}>Exit</Button>
                        :
                        <NavLink>
                            <Button variant={'outlined'}>Login</Button>
                        </NavLink>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;