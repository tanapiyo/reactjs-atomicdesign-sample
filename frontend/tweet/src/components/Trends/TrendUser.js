import React from "react";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const TrendUser = () => {
  const StyledCard = styled(Card)`
    background: ${props => props.theme.palette.secondary.light};
    border-radius: 10px;
  `;
  const Title = styled.div`
    padding: 10px;
    border-bottom: solid 1px ${props => props.theme.palette.secondary.main};
  `;
  const OneUser = styled(CardContent)`
    border-bottom: solid 1px ${props => props.theme.palette.secondary.main};
  `;

  return (
    <Grid item xs={12}>
      <StyledCard>
        <Title>
          <Typography variant="h3">おすすめユーザー</Typography>
        </Title>
        <OneUser>ユーザー１</OneUser>
        <OneUser>ユーザー２</OneUser>
      </StyledCard>
    </Grid>
  );
};

export default TrendUser;
