import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useGlobal } from 'reactn';
import backgroundHeader from '../../assets/images/backgroundHeader.jpg'

const AppContainer = (props) => {

	const history = useHistory();
	const [ indicator, setIndicator ] = useGlobal('navBarIndicator');

	useEffect(() => {

		setIndicator(history.location.pathname)

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
			setIndicator(history.location.pathname)
			trigger()
		})
		
	}, [])

	return (
		<>{props.children}</>
	)
}

export default AppContainer
