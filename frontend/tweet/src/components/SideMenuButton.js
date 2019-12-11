import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const SideMenuButton = (props) => {
    return(
        <Button><Icon className={props.icon} color="primary" />{props.text}</Button>
    );
};

export default SideMenuButton;