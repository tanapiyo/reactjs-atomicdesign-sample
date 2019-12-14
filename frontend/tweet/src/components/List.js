import React from 'react';
import Grid from '@material-ui/core/Grid';

import SideMenu from './SideMenu/SideMenu'
import Trend from './Trends/Trend'
import TweetMain from './Tweets/TweetMain'
import Container from '@material-ui/core/Container';

const List = () => {
    return(
        <Container fixed>
            <Grid container spacing={3}>
                <Grid item xs={3}><SideMenu /></Grid>
                <Grid item xs={6}><TweetMain /></Grid>
                <Grid item xs={3}><Trend /></Grid> 
            </Grid>
        </Container>
 
    );
};

export default List;