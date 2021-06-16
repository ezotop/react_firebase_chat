import React, { useContext, useState } from 'react';
import { Context } from '..';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Grid, TextField, Button } from '@material-ui/core';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Chat = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(firestore.collection('messages').orderBy('createdAt'))
    // useCollectionData принимает параметром запрос, запрос делаем с помощью обьекта firestore
    // Так как эта БД noSQL, то она состоит из коллекций. Нужная нам коллекция называется messages

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