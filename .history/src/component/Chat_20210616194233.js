import React, { useContext, useState } from 'react';
import { Context } from '..';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Grid, TextField, Button, Avatar } from '@material-ui/core';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Loader from './Loader';
import firebase from 'firebase';

const Chat = () => {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [value, setValue] = useState('')
    const [messages, loading] = useCollectionData(firestore.collection('messages').orderBy('createdAt')) //Получаем данные из БД
    // useCollectionData принимает параметром запрос, запрос делаем с помощью обьекта firestore
    // Так как эта БД noSQL, то она состоит из коллекций. Нужная нам коллекция называется messages

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: firebase.firestore.FieldValue.serverTimestamp() // serverTimestamp() - возвращает время в миллисекундах
        })
        setValue('')
    }

    if (loading) return <Loader />

    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight - 50}}
                justify={'center'}
                alignItems={'center'}
            >
                <div style={{width: '80%', height: '70vh', border: '1px solid gray', overflowY: 'auto', marginTop: '20px'}}>
                    {
                        messages.map(message => 
                            <div
                                key={message.createdAt}
                                style={{
                                    margin: '5px',
                                    width: 'fitContent',
                                    padding: '5px 10px',
                                    backgroundColor: user.uid === message.uid ? 'rgb(2, 183, 255)' : '#cccccc',
                                    borderRadius: '10px'
                            }}>
                                <Grid container>
                                    <Avatar src={message.photoURL} />
                                    <div>{message.displayName}</div>
                                </Grid>
                                <div>{message.text}</div>
                            </div>
                        )
                    }
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