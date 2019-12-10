import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {Card,CardContent, CardHeader, Link}  from '@material-ui/core';


const Trend = () => {
    const preventDefault = event => event.preventDefault();
    return(
        <Grid container spacing={1}>
            <Grid item xs={10}><TextField id="outlined-basic" label="Outlined" variant="outlined" /></Grid>
            <Grid item xs={10}>
                <Card>
                <CardHeader title="おすすめトレンド" />
                <CardContent>トピック１
                </CardContent> 
                <CardContent>トピック２
                </CardContent> 
                </Card>
            </Grid>
            <Grid item xs={10}>
                <Card>
                <CardHeader title="おすすめユーザー" />
                <CardContent>ユーザー１
                </CardContent> 
                <CardContent>ユーザー２
                </CardContent> 
                </Card>
            </Grid>
            <Grid item xs={10}>
                <Link href="#" onClick={preventDefault}>利用規約</Link>
                <Link href="#" onClick={preventDefault}>プライバシーポリシー</Link>
                <Link href="#" onClick={preventDefault}>Cookie</Link>
            </Grid>
            <Grid item xs={10}>
                <Link href="#" onClick={preventDefault}>広告情報</Link>
                <Link href="#" onClick={preventDefault}>もっと見る</Link>
                @2019 Twitter, Inc.
            </Grid>


        </Grid>
        
 
    );
};

export default Trend;
