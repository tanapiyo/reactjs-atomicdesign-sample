import React from "react";
import Grid from "@material-ui/core/Grid";

import TrendLinks from "./TrendLinks";
import TrendTopic from "./TrendTopic";
import TrendUser from "./TrendUser";
import TrendSearch from "./TrendSearch";

const Trend = () => {
  return (
    <Grid container spacing={1}>
      <TrendSearch />
      <TrendTopic />
      <TrendUser />
      <TrendLinks />
    </Grid>
  );
};

export default Trend;
