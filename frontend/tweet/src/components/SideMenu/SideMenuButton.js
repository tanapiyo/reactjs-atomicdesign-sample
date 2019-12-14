import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';

const SideMenuButton = (props) => {
    const StyledButton = styled(Button)`
        border-radius: 50px;
        padding: 12px 20px;
        margin-bottom: 10px;
        `;
    
    const StyledIcon = styled(Icon)`
        margin-right: 20px
        `;

    return(
        <StyledButton><StyledIcon className={props.icon} />
            <Typography variant="h3">{props.text}</Typography>
        </StyledButton>
    );
};

export default SideMenuButton;