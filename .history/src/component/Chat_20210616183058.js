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
                <div style={{width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'auto'}}>

                </div>
            </Grid>
        </Container>
    );
};

export default Chat;