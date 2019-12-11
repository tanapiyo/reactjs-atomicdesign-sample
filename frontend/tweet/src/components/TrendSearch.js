import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import styled from 'styled-components';

const TrendSearch = () => {
    const SearchTextField = styled(TextField)`
      margin: 10px 0px;
      background: #f5f5f5; 
      `;
    
    return( 
        <Grid item xs={12}>
            <SearchTextField fullWidth="true" label="キーワード検索" variant="outlined" />
        </Grid>
    );
};

export default TrendSearch;
