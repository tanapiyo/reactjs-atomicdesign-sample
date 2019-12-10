import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const SideMenuButton = (icon, text) => {
    return(
        <Button><Icon className={icon} color="primary" />{text}</Button>
    );
};

export default SideMenuButton;