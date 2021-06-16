import React from 'react';
import { Container, Grid } from '@material-ui/core';

const Loader = () => {
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
                    
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;