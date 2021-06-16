import React from 'react';
import { Container, Grid, Box, Button } from '@material-ui/core';

const Login = () => {
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
                        <Button>Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;