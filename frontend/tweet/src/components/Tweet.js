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
                {/* <div>{props.body}</div>
                <div>{props.author}</div>
            <div>{props.created_at}</div> */}
              <Avatar alt="Icon" src="test" />名前　時間 ツイート内容
            </CardContent> 
            <CardActions>
              edit
            </CardActions>
        </Card>
    )
}

export default Tweet;