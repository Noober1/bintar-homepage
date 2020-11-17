import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        background: 'linear-gradient(45deg, #926bfe 30%, #5388ff 90%)',
        borderBottom: '3px solid',
        borderRadius: 50,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        transition:'box-shadow .3s ease-in-out',
        boxShadow: '0 0 5px 2px rgb(114 105 255 / 30%)',
        '&:hover':{
            boxShadow: '0 10px 25px 25px rgb(114 105 255 / 30%)'
        },
        '&:focus':{
            borderBottom:'none'
        }
    },
};

function CustomButton(props) {
    const { classes, children, className, lefticon,  ...other } = props;

    return (
        <Button className={clsx(classes.root, className)} {...other}>
        {children || 'class names'}&nbsp;
        {lefticon}
        </Button>
    );
}

CustomButton.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    lefticon: PropTypes.node,
};

export default withStyles(styles)(CustomButton);