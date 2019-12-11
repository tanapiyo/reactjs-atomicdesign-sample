import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Avatar from '@material-ui/core/Avatar';


const Tweet = (...props) =>{
    return(
        <Card>
            <CardContent>
              <Avatar alt="Icon" src="test" />
              <div>{props[0].body}</div>
              <div>{props[0].author}</div>
              <div>{props[0].created_at}</div>
            </CardContent> 
            <CardActions>
              edit
            </CardActions>
        </Card>
    )
}

export default Tweet;