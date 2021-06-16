import React, { useContext } from 'react';
import { Container, Grid, Box, Button } from '@material-ui/core';
import { Context } from '..';

const Login = () => {
    const {auth} = useContext(Context);

    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight - 50}}
                justify={'center'}
                alignItems={'center'}
            >
                <Grid
                    container
                    style={{width: 400, backgroundColor: 'lightgray'}}
                    alignItems={'center'}
                    direction={'column'}
                >
                    <Box p={5}>
                        <Button variant={'outlined'}>Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;