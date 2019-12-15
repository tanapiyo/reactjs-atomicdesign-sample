import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import Tweet from "./Tweet";
import styled from "styled-components";

const TweetMain = () => {
  const [tweetData, setTweetData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      // const headers = {headers: {
      // // "Access-Control-Allow-Origin": "*",
      // // "Access-Control-Allow-Headers":"Content-Type",
      // "Content-Type": "application/json"
      // }};
      // const response = await axios.get("http://localhost:8000/api/tweets",
      // headers)

      const response = {
        data: [
          {
            body: "今日もいい天気だったわ",
            created_at: "2019-12-04T15:39:29.045258Z",
            author: { name: "Mary", mail: "example@ex.com" }
          },
          {
            body: "パン屋さんができたよ",
            created_at: "2019-12-04T15:39:29.045258Z",
            author: { name: "ai", mail: "example@ex.com" }
          },
          {
            body: "今日もいい天気だったわ",
            created_at: "2019-12-04T15:39:29.045258Z",
            author: { name: "Mary", mail: "example@ex.com" }
          },
          {
            body: "パン屋さんができたよ",
            created_at: "2019-12-04T15:39:29.045258Z",
            author: { name: "ai", mail: "example@ex.com" }
          },
          {
            body: "今日もいい天気だったわ",
            created_at: "2019-12-04T15:39:29.045258Z",
            author: { name: "Mary", mail: "example@ex.com" }
          },
          {
            body: "パン屋さんができたよ",
            created_at: "2019-12-04T15:39:29.045258Z",
            author: { name: "ai", mail: "example@ex.com" }
          },
          {
            body: "今日もいい天気だったわ",
            created_at: "2019-12-04T15:39:29.045258Z",
            author: { name: "Mary", mail: "example@ex.com" }
          },
          {
            body: "パン屋さんができたよ",
            created_at: "2019-12-04T15:39:29.045258Z",
            author: { name: "ai", mail: "example@ex.com" }
          }
        ]
      };
      setTweetData(response["data"]);
    };
    fetch();
  }, []);

  const StickyHome = styled(Grid)`
    position: sticky;
    top: 0px;
    padding: 20px 5px;
    border: solid 1px ${props => props.theme.palette.secondary.light};
    background: #fff;
    z-index: 10;
  `;

  return (
    <Grid container justify="center" alignItems="center">
      <StickyHome item xs={12}>
        <Typography variant="h3">ホーム</Typography>
      </StickyHome>
      <Grid item xs={12}>
        ツイートcreateフォーム追加予定
      </Grid>
      {tweetData.map(tweet => (
        <Grid item xs={12}>
          <Tweet {...tweet} />
        </Grid>
      ))}
    </Grid>
  );
};

export default TweetMain;
