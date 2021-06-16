import React from 'react';
import { AppBar, Button, Grid, Toolbar } from '@material-ui/core';

const Navbar = () => {
    return (
        <AppBar color={'secondary'} position="static">
            <Toolbar>
                <Grid container justify={'flex-end'}>
                    <Button outlined>Login</Button>
                    <Button outlined>Exit</Button>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;