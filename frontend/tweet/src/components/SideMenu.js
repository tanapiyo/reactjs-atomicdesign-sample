import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SideMenuButton from './SideMenuButton'
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const SideMenu = () => {
    const TwitterIcon = styled(Button)`
        border-radius: 50%;
        padding: 20px 10px;
        `;
    
    const TweetButton = styled(Button)`
        border-radius: 50px;
        color: #fff;
        &:hover {
            color: #fff;
        }
        `;
 
    
    return(
        <Grid container justify="center" alignItems="center">
            <Grid item xs={10}><TwitterIcon><Icon className="fab fa-twitter" color="primary" /></TwitterIcon></Grid>
            <Grid item xs={10}><SideMenuButton icon="fas fa-home" text="ホーム" /></Grid>
            <Grid item xs={10}><SideMenuButton icon="fas fa-hashtag" text="話題を検索" /></Grid>
            <Grid item xs={10}><SideMenuButton icon="fas fa-bell" text="通知" /></Grid>
            <Grid item xs={10}><SideMenuButton icon="far fa-envelope" text="メッセージ" /></Grid>
            <Grid item xs={10}><SideMenuButton icon="far fa-bookmark" text="ブックマーク" /></Grid>
            <Grid item xs={10}><SideMenuButton icon="far fa-list-alt" text="リスト" /></Grid>
            <Grid item xs={10}><SideMenuButton icon="fas fa-user-circle" text="プロフィール" /></Grid>
            <Grid item xs={10}><SideMenuButton icon="fas fa-ellipsis-h" text="もっと見る" /></Grid>
            <Grid item xs={10}><TweetButton fullWidth="true" variant="contained" color="primary">
                <Typography variant="h3">ツイート</Typography>
            </TweetButton></Grid>

        </Grid>
        
 
    );
};

export default SideMenu;