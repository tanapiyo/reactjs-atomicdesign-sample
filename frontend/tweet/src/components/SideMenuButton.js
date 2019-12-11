import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import styled from 'styled-components';

const SideMenuButton = (props) => {
    const StyledButton = styled(Button)`
        border-radius: 50px;
        padding: 8px 20px;
        font-weight: bold;
        font-size: 1.2em;
        margin-bottom: 10px;
        &:hover {
            color: #03a9f4;
            background: ##03a9f4;
        }
        `;
    
    const StyledIcon = styled(Icon)`
        margin-right: 20px
        &:hover {
            color: #03a9f4;
            background: ##03a9f4;
        }
        `;

    return(
        <StyledButton><StyledIcon className={props.icon} color="primary" />{props.text}</StyledButton>
    );
};

export default SideMenuButton;