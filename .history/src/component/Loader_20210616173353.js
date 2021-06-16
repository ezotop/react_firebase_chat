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
                    style={{}}
                    alignItems={'center'}
                    direction={'column'}
                >
                    <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;