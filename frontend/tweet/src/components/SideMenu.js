import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SideMenuButton from './SideMenuButton'

const SideMenu = () => {
    return(
        <Grid container justify="center" alignItems="center" spacing={4}>
            {/* <Grid item xs={8}><SideMenuButton icon={"fab fa-twitter"} text={""} /></Grid> */}
            {/* <Grid item xs={8}><SideMenuButton icon="fas fa-home" text="ホーム" /></Grid>
            <Grid item xs={8}><SideMenuButton icon="fas fa-hashtag" text="話題を検索" /></Grid>
            <Grid item xs={8}><SideMenuButton icon="fas fa-bell" text="通知" /></Grid>
            <Grid item xs={8}><SideMenuButton icon="far fa-envelope" text="メッセージ" /></Grid>
            <Grid item xs={8}><SideMenuButton icon="far fa-bookmark" text="ブックマーク" /></Grid>
            <Grid item xs={8}><SideMenuButton icon="far fa-list-alt" text="リスト" /></Grid>
            <Grid item xs={8}><SideMenuButton icon="fas fa-user-circle" text="プロフィール" /></Grid>
            <Grid item xs={8}><SideMenuButton icon="fas fa-ellipsis-h" text="もっと見る" /></Grid> */}

            <Grid item xs={8}><Button><Icon className="fab fa-twitter" color="primary" /></Button></Grid>
            <Grid item xs={8}><Button><Icon className="fas fa-home" color="primary" />ホーム</Button></Grid>
            <Grid item xs={8}><Button><Icon className="fas fa-hashtag" color="primary" />話題を検索</Button></Grid>
            <Grid item xs={8}><Button><Icon className="fas fa-bell" color="primary" />通知</Button></Grid>
            <Grid item xs={8}><Button><Icon className="far fa-envelope" color="primary" />メッセージ</Button></Grid>
            <Grid item xs={8}><Button><Icon className="far fa-bookmark" color="primary" />ブックマーク</Button></Grid>
            <Grid item xs={8}><Button><Icon className="far fa-list-alt" color="primary" />リスト</Button></Grid>
            <Grid item xs={8}><Button><Icon className="fas fa-user-circle" color="primary" />プロフィール</Button></Grid>
            <Grid item xs={8}><Button><Icon className="fas fa-ellipsis-h" color="primary" />もっと見る</Button></Grid>
            <Grid item xs={8}><Button variant="contained" color="primary">ツイート</Button></Grid>

        </Grid>
        
 
    );
};

export default SideMenu;