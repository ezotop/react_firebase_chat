import React from 'react';
import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';

const Navbar = () => {
    const user = false
    return (
        <AppBar color={'secondary'} position="static">
            <Toolbar>
                <Grid container justify={'flex-end'}>
                    {
                        user ?
                        <Button variant={'outlined'}>Exit</Button>
                        :
                        <Button variant={'outlined'}>Login</Button>
                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;