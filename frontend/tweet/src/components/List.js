import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';

//import axios from 'axios';
import SideMenu from './SideMenu'

const List = () => {
    const [tweetData, setTweetData] = useState([]);
    useEffect(() => {
        //const response = await axios.get("http://")
        const response = [
            {
                "body": "今日もいい天気だったわ",
                "created_at": "2019-12-04T15:39:29.045258Z",
                "author": "Mary"
            },
            {
                "body": "パン屋さんが新しくできたよ",
                "created_at": "2019-12-04T15:39:45.098496Z",
                "author": "Mary"
            },
            {
                "body": "Hi, I am Alice!",
                "created_at": "2019-12-08T14:29:29.633301Z",
                "author": "Mary"
            }
        ]
        setTweetData(response);
      }, []);

    return(
        <Grid container spacing={4}>
            <Grid item xs={3}><SideMenu /></Grid>
            <Grid item xs={6}>メイン</Grid>
            <Grid item xs={3}>検索</Grid>
            {tweetData.map((tweet) => (
            <div>{tweet.body}</div>
            ))}
        </Grid>
        
 
    );
};

export default List;