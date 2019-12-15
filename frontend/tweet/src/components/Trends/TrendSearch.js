import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import styled from "styled-components";

const TrendSearch = () => {
  const SearchTextField = styled(TextField)`
    background: ${props => props.theme.palette.secondary.light};
  `;

  const StickySearch = styled(Grid)`
    position: sticky;
    top: 0px;
    z-index: 10;
    background: #fff;
  `;

  return (
    <StickySearch item xs={12}>
      <SearchTextField
        fullWidth="true"
        label="キーワード検索"
        variant="outlined"
      />
    </StickySearch>
  );
};

export default TrendSearch;
