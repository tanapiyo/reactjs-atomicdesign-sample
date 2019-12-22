import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Hidden from "@material-ui/core/Hidden";

const SideMenuButton = props => {
  const StyledButton = styled(Button)`
    border-radius: 50px;
    padding: 12px 20px;
    margin-bottom: 10px;
  `;

  const StyledTypography = styled(Typography)`
    margin-left: 20px;
  `;

  return (
    <StyledButton>
      {props.children}
      <Hidden mdDown>
        <StyledTypography variant="h3">{props.text}</StyledTypography>
      </Hidden>
    </StyledButton>
  );
};

export default SideMenuButton;
