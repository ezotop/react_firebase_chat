import React, { useContext } from 'react';
import { Container, Grid, Box, Button } from '@material-ui/core';
import { Context } from '../index';
import firebase from 'firebase';

const Login = () => {
    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider() // Получили провайдер авторизации из firebase
        const {user} = await auth.signInWithPopup(provider) // Получаем информацию о пользователе
        console.log(user)
    }

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
                        <Button variant={'outlined'} onClick={login}>Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;