import React from "react";
import Grid from "@material-ui/core/Grid";
import { Link } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const TrendLinks = () => {
  const preventDefault = event => event.preventDefault();
  const StyledLink = styled(Link)`
    margin: 10px;
  `;
  const CopyRight = styled.span`
    margin: 10px;
  `;
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <StyledLink href="#" onClick={preventDefault}>
          <Typography display="inline" variant="body2">
            利用規約
          </Typography>
        </StyledLink>
        <StyledLink href="#" onClick={preventDefault}>
          <Typography display="inline" variant="body2">
            プライバシーポリシー
          </Typography>
        </StyledLink>
        <StyledLink href="#" onClick={preventDefault}>
          <Typography display="inline" variant="body2">
            Cookie
          </Typography>
        </StyledLink>
      </Grid>
      <Grid item xs={12}>
        <StyledLink href="#" onClick={preventDefault}>
          <Typography display="inline" variant="body2">
            広告情報
          </Typography>
        </StyledLink>
        <StyledLink href="#" onClick={preventDefault}>
          <Typography display="inline" variant="body2">
            もっと見る
          </Typography>
        </StyledLink>
        <CopyRight>
          <Typography display="inline" variant="body2">
            @2019 Twitter, Inc.
          </Typography>
        </CopyRight>
      </Grid>
    </React.Fragment>
  );
};

export default TrendLinks;
