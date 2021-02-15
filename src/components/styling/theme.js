const darkTheme = {
	overrides: {
		MuiAppBar: {
			colorDefault: {
				backgroundColor: '#5587fe',
			},
		},
	},
	palette: {
		type: 'dark',
		borderNav:'#faf005',
		primary: {
			main:'#5587fe'
		}
	}
};

const lightTheme = {
	overrides: {
		MuiAppBar: {
			colorDefault: {
				backgroundColor: '#5587fe',
			},
		},
	},
	palette: {
		type: 'light',
		borderNav:'#28166f',
		primary: {
			main:'#5587fe'
		}
	}
};

const ThemeStyle = (type) => type === 'dark' ? darkTheme : lightTheme

export default ThemeStyle