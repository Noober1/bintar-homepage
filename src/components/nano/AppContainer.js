import { useTheme } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useGlobal } from 'reactn';
import backgroundHeader from '../../assets/images/backgroundHeader.jpg'

const AppContainer = (props) => {

	const history = useHistory();
	const [ indicator, setIndicator ] = useGlobal('navBarIndicator');

	const theme = useTheme()

	useEffect(() => {

		const saveIndicatorState = () => {
			let path = history.location.pathname;
			setIndicator(path)
			localStorage.setItem('navBarIndicator',path)
		}

		saveIndicatorState()

		const rootDOM = document.querySelector('#body');

		const trigger = (pathname) => {
			let getLocation = pathname || history.location.pathname
			if (rootDOM !== null) {
				let { style } = rootDOM
				if (getLocation === '/') {
					style.backgroundImage = `url(${backgroundHeader})`
					style.backgroundRepeat = 'no-repeat'
					style.backgroundPosition = 'center'
					style.backgroundSize = 'cover'
				} else {
					style.backgroundImage = 'none'
				}
			}
		}

		trigger()

		history.listen((location, action) => {
			saveIndicatorState()
			trigger()
		})
		
	}, [])

	return (
		<div style={{padding:theme.spacing(5,0,0,0),minHeight:'100vh'}}>{props.children}</div>
	)
}

export default AppContainer
