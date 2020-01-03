import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import styled from "styled-components";

const CreateTweet = (...props) => {
  const StyledCard = styled(Card)`
    border: solid 1px ${props => props.theme.palette.secondary.light};
  `;

  const CenterGrid = styled(Grid)`
    position: relative;
  `;

  const MarginGrid = styled(Grid)`
    margin-bottom: 10px;
    margin-right: 15px;
  `;

  const CenterAvatar = styled(Avatar)`
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  `;

  const TweetButton = styled(Button)`
    border-radius: 50px;
    color: #fff;
    &:hover {
      color: #fff;
    }
  `;

  const charNumberCount = word => {
    setTweetWordLength(word.length);
    setTweetWord(word);
  };

  const postTweet = () => {
    //axiosでツイート
    const headers = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "application/json"
      }
    };
    const response = axios.get("http://localhost:8000/api/tweets", headers);
  };

  const [tweetWordLength, setTweetWordLength] = useState(7);
  const [tweetWord, setTweetWord] = useState("いまどうしてる？");

  return (
    <StyledCard>
      <Grid container>
        <CenterGrid item xs={2}>
          <CenterAvatar alt="Icon" src="test" />
        </CenterGrid>
        <Grid item xs={10}>
          <TextField
            id="standard-multiline-static"
            multiline
            rows="4"
            defaultValue={tweetWord}
            fullWidth="true"
            onChange={e => charNumberCount(e.target.value)}
            // disableUnderline="true"
          />
        </Grid>
        <MarginGrid
          item
          xs={12}
          container
          justify="flex-end"
          alignItems="center"
        >
          <Typography variant="h4" color="primary">
            {tweetWordLength}/140文字
          </Typography>
          <TweetButton
            size="mediam"
            variant="contained"
            color="primary"
            onClick={postTweet}
          >
            <Typography variant="h4">ツイート</Typography>
          </TweetButton>
        </MarginGrid>
      </Grid>
    </StyledCard>
  );
};

export default CreateTweet;
