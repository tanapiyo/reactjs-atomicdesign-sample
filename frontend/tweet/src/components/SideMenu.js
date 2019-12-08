import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const SideMenu = () => {
    return(
        <Grid container justify="center" alignItems="center" spacing={4}>
            <Grid item xs={8}><Icon className="fab fa-twitter" color="primary" /></Grid>
            <Grid item xs={8}><Icon className="fas fa-home" color="primary" />ホーム</Grid>
            <Grid item xs={8}><Icon className="fas fa-hashtag" color="primary" />話題を検索</Grid>
            <Grid item xs={8}><Icon className="fas fa-bell" color="primary" />通知</Grid>
            <Grid item xs={8}><Icon className="far fa-envelope" color="primary" />メッセージ</Grid>
            <Grid item xs={8}><Icon className="far fa-bookmark" color="primary" />ブックマーク</Grid>
            <Grid item xs={8}><Icon className="far fa-list-alt" color="primary" />リスト</Grid>
            <Grid item xs={8}><Icon className="fas fa-user-circle" color="primary" />プロフィール</Grid>
            <Grid item xs={8}><Icon className="fas fa-ellipsis-h" color="primary" />もっと見る</Grid>
            <Grid item xs={8}><Button variant="contained" color="primary">ツイート</Button></Grid>

        </Grid>
        
 
    );
};

export default SideMenu;