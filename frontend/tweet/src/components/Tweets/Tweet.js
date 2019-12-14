import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

import styled from 'styled-components';

const Tweet = (...props) =>{
    const StyledCard = styled(Card)`
      border: solid 1px #eeeeee;
      `;
    
    const SpanName = styled.span`
      font-weight: bold;
      margin-right: 15px;
      `;
    const SpanTime = styled.span`
      color: #9e9e9e;
      `;
    
    const CenterGrid = styled(Grid)`
      position: relative;
      `;
    
    const CenterAvatar = styled(Avatar)`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateY(-50%) translateX(-50%);  
      `;
    
    const getTimeDiffHour = (date) => {
      const now = new Date();
      const target_date = new Date(date);
      const timediff = now.getTime() - target_date.getTime();
      const timediff_hour = Math.floor(timediff / (1000 * 60 * 60 ));
      return timediff_hour
    }


    return(
      
        <StyledCard>
            <Grid container >
              <CenterGrid item xs={2}>
                <CenterAvatar alt="Icon" src="test" />
              </CenterGrid>
              <Grid item xs={10}>
                <CardContent>
                    <SpanName>{props[0]['author']['name']}</SpanName>
                    <SpanTime>{getTimeDiffHour(props[0]['created_at'].created_at)}時間</SpanTime>
                    <div>{props[0]['body']}</div>

                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="edit">
                    <EditIcon />
                  </IconButton>
                </CardContent>
              </Grid>

            </Grid>
        </StyledCard>
    )
}

export default Tweet;