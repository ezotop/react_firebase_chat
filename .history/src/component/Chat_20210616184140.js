import React, { useContext, useState } from 'react';
import { Context } from '..';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Grid, TextField, Button } from '@material-ui/core';

const Chat = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')

    const sendMessage = async () => {
        console.log(value)
    }

    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight - 50}}
                justify={'center'}
                alignItems={'center'}
            >
                <div style={{width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'auto', marginTop: '20px'}}>
                    
                </div>
                <Grid
                    container
                    direction={'column'}
                    alignItems={'flex-end'}
                    style={{width: '80%'}}
                >
                    <TextField variant={'outlined'} fullWidth rowsMax={2} value={value} onChange={e => setValue(e.target.value)} />
                    <Button variant={'outlined'} onClick={sendMessage}>Отправить</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Chat;