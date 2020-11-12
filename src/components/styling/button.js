import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        background: 'linear-gradient(45deg, #926bfe 30%, #5388ff 90%)',
        borderRadius: 50,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        transition:'all .3s ease-in-out',
        boxShadow: '0 3px 5px 2px rgb(114 105 255 / 30%)',
        '&:hover':{
            borderRadius: 3,
        }
    },
};

function CustomButton(props) {
    const { classes, children, className, ...other } = props;

    return (
        <Button className={clsx(classes.root, className)} {...other}>
        {children || 'class names'}&nbsp;
        {props.lefticon}
        </Button>
    );
}

CustomButton.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default withStyles(styles)(CustomButton);