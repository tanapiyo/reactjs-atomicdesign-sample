import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';

import axios from 'axios';
import SideMenu from './SideMenu'
import Tweet from './Tweet'
import Trend from './Trend'

const List = () => {
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
            console.log(response);
            setTweetData(response);
        };
        fetch();
      }, []);

    return(
        <Grid container spacing={4}>
            <Grid item xs={3}><SideMenu /></Grid>
            <Grid item xs={6}>
                {tweetData.map((tweet) => (
                    <Tweet {...tweet}/>
                ))}</Grid>
            <Grid item xs={3}><Trend /></Grid>
            
        </Grid>
        
 
    );
};

export default List;