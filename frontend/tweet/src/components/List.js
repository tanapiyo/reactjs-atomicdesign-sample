import React from "react";
import Grid from "@material-ui/core/Grid";

import SideMenu from "./SideMenu/SideMenu";
import Trend from "./Trends/Trend";
import TweetMain from "./Tweets/TweetMain";
import Container from "@material-ui/core/Container";

import Hidden from "@material-ui/core/Hidden";

const List = () => {
  return (
    <Container fixed>
      <Grid container spacing={3}>
        <Grid item lg={3} sm={2}>
          <SideMenu />
        </Grid>
        <Grid item lg={6} md={6} sm={10}>
          <TweetMain />
        </Grid>
        <Hidden smDown>
          <Grid item lg={3} md={4} sm={false}>
            <Trend />
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  );
};

export default List;
