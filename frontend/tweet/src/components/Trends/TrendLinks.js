import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Link}  from '@material-ui/core';

import styled from 'styled-components';

const TrendLinks = () => {
    const preventDefault = event => event.preventDefault();
    const StyledLink = styled(Link)`
      margin: 10px;
      color: #616161;
      font-size: 13px;
      `;
    const CopyRight = styled.span`
      margin: 10px;
      color: #616161;
      font-size: 13px;
      `;
    return( 
        <React.Fragment>
            <Grid item xs={12}>
                <StyledLink href="#" onClick={preventDefault}>利用規約</StyledLink>
                <StyledLink href="#" onClick={preventDefault}>プライバシーポリシー</StyledLink>
                <StyledLink href="#" onClick={preventDefault}>Cookie</StyledLink>
            </Grid>
            <Grid item xs={12}>
                <StyledLink href="#" onClick={preventDefault}>広告情報</StyledLink>
                <StyledLink href="#" onClick={preventDefault}>もっと見る</StyledLink>
                <CopyRight>@2019 Twitter, Inc.</CopyRight>
            </Grid>
        </React.Fragment>   
    );
};

export default TrendLinks;
