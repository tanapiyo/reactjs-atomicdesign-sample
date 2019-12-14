import React from 'react';
import Grid from '@material-ui/core/Grid';
import {Card,CardContent}  from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const TrendUser = () => {
    const StyledCard = styled(Card)`
      background: #f5f5f5;
      border-radius: 10px;
      `;
      const Title = styled.div`
      padding: 10px;
      border-bottom: solid 1px #e0e0e0;
      `;
    const OneUser = styled(CardContent)`
      border-bottom: solid 1px #e0e0e0;
      `;
    
    return( 
        <Grid item xs={12}>
            <StyledCard>
                <Title><Typography variant="h3">おすすめユーザー</Typography></Title>
                <OneUser>ユーザー１
                </OneUser> 
                <OneUser>ユーザー２
                </OneUser> 
            </StyledCard>
        </Grid> 
    );
};

export default TrendUser;