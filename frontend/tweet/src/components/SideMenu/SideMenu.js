import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SideMenuButton from "./SideMenuButton";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

//icons
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EmailIcon from "@material-ui/icons/Email";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const SideMenu = () => {
  const TwitterIconButton = styled(Button)`
    border-radius: 50%;
    padding: 13px 10px;
  `;

  const TweetButton = styled(Button)`
    border-radius: 50px;
    color: #fff;
    &:hover {
      color: #fff;
    }
  `;

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={10}>
        <TwitterIconButton>
          <TwitterIcon fontSize="large" color="primary" />
        </TwitterIconButton>
      </Grid>
      <Grid item xs={10}>
        <SideMenuButton text="ホーム">
          <HomeIcon fontSize="large" />
        </SideMenuButton>
      </Grid>
      <Grid item xs={10}>
        <SideMenuButton text="話題を検索">
          <AppsIcon fontSize="large" />
        </SideMenuButton>
      </Grid>
      <Grid item xs={10}>
        <SideMenuButton text="通知">
          <NotificationsIcon fontSize="large" />
        </SideMenuButton>
      </Grid>
      <Grid item xs={10}>
        <SideMenuButton text="メッセージ">
          <EmailIcon fontSize="large" />
        </SideMenuButton>
      </Grid>
      <Grid item xs={10}>
        <SideMenuButton text="ブックマーク">
          <BookmarkBorderIcon fontSize="large" />
        </SideMenuButton>
      </Grid>
      <Grid item xs={10}>
        <SideMenuButton text="リスト">
          <FormatListBulletedIcon fontSize="large" />
        </SideMenuButton>
      </Grid>
      <Grid item xs={10}>
        <SideMenuButton text="プロフィール">
          <AccountCircleIcon fontSize="large" />
        </SideMenuButton>
      </Grid>
      <Grid item xs={10}>
        <SideMenuButton text="もっと見る">
          <MoreHorizIcon fontSize="large" />
        </SideMenuButton>
      </Grid>
      <Grid item xs={10}>
        <TweetButton fullWidth="true" variant="contained" color="primary">
          <Typography variant="h3">ツイート</Typography>
        </TweetButton>
      </Grid>
    </Grid>
  );
};

export default SideMenu;
