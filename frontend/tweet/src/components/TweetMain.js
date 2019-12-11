import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';

import axios from 'axios';
import Tweet from './Tweet'
// import { useScrollTrigger } from '@material-ui/core';
// import Container from '@material-ui/core/Container';

const TweetMain = () => {
    const [tweetData, setTweetData] = useState([]);
    useEffect(()=>{
        const fetch = async () => {
            // const headers = {headers: {
            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers":"Content-Type",
            // "Content-Type": "application/json"
            // }};
            // const response = await axios.get("http://localhost:8000/api/tweets",
            // headers)
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
        };
        fetch();
      }, []);



    return(
        <Grid container justify="center" alignItems="center">
            <Grid item xs={12}>ホーム（固定の予定）</Grid>
            <Grid item xs={12}>ツイートcreateフォーム追加予定</Grid>
            {tweetData.map((tweet) => (
                <Grid item xs={12}><Tweet {...tweet}/></Grid>
            ))}
        </Grid>           
    );
};

export default TweetMain;