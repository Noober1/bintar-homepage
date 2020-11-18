import React from 'react'
import { Tooltip, withStyles, Zoom } from "@material-ui/core";

const HtmlTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: theme.palette.background.default,
		color: theme.palette.text.primary,
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(12),
		border: '1px solid #dadde9',
	},
}))(Tooltip);

const CustomTooltip = ({title,children,placement}) => {
	return(
		<HtmlTooltip TransitionComponent={Zoom} placement={placement} title={title}>
    		{children}
    	</HtmlTooltip>
	)
}

export default CustomTooltip