import React, { useContext } from 'react';
import { Context } from '..';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Grid } from '@material-ui/core';

const Chat = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight - 50}}
                justify={'center'}
                alignItems={'center'}
            >
                
            </Grid>
        </Container>
    );
};

export default Chat;