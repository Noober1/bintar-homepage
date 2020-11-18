import { makeStyles } from '@material-ui/core';
import HeadMaster from '../../../assets/images/kepalasekolah.png'
import aboutBackground from '../../../assets/images/tefa.jpg'
import backgroundStudy from '../../../assets/images/study.jpg'
import hex2Rgba from '../../nano/hex2rgba'

const mainStyles = makeStyles((theme) => {
	var bg = theme.palette.background.default
	var solidBackground = `linear-gradient(${hex2Rgba(bg,.7)} 0%, ${hex2Rgba(bg,.7)} 100%)`;

	return ({
		title: {
			margin: theme.spacing(15, 'auto')
		},
		aboutBG:{
            display:'block',
            position:'relative',
            padding:theme.spacing(10,0,10,0),
			backgroundImage:`${solidBackground},url(${aboutBackground})`,
			backgroundRepeat:'no-repeat',
			backgroundAttachment:'fixed',
			backgroundPosition:'center',
			backgroundSize:'cover',
            alignItems:'center',
			alignItems:'center'
		},
		customBottomDivider:{
			width:'100%',
			height:theme.spacing(10),
			position:'absolute',
			bottom:0,
			left:0,
			transform:'rotate(180deg)'
		},
		customTopDivider:{
			width:'100%',
			height:theme.spacing(10),
			position:'absolute',
			top:0,
			left:0,
		},
		titleText:{
			fontFamily: 'Inter',
			fontWeight: 'Bold',
			textShadow:`4px 4px 0px ${bg}`,
			textTransform:'uppercase',
			[theme.breakpoints.up('xs')]: {
				fontSize: '3rem',
			},
			[theme.breakpoints.up('sm')]: {
				fontSize: '4rem',
			},
			[theme.breakpoints.up('md')]: {
				fontSize: '6rem',
			},
			[theme.breakpoints.up('lg')]: {
				fontSize: '7rem',
			},
		},
		mainHeader:{
			background:`linear-gradient(180deg, transparent 0%, ${bg} 75%, ${bg} 100%)`
		},
		boxContent:{
			margin: theme.spacing(15, 0, 15, 0)
		},
		boxWhy:{
            backgroundColor:bg,
			padding: theme.spacing(5)
		},
		boxAffiliation:{
			padding: theme.spacing(15, 0, 15, 0),
			animation:'bgstripes 2s infinite linear',
			background:`linear-gradient(  45deg, #fff 25%,  #f2f2ee 25%,  #f2f2ee 50%,  #fff 50%,  #fff 75%,  #f2f2ee 75%,  #f2f2ee )`,
			backgroundSize:'30px 30px',
			color:'#303030'
		},
		iframeMaps:{
			borderRadius:'30px'
		},
		titleMaps:{
			color:bg
		},
		boxMaps:{
			position:'relative',
			boxShadow:`0 0 40px 10px ${theme.palette.text.primary}`,
			backgroundColor:theme.palette.text.primary,
			padding: theme.spacing(10, 0, 15, 0)
		},
		boxIntro:{
			backgroundPosition:'bottom left',
			backgroundSize:'contain',
			backgroundRepeat:'no-repeat',
			height:'100%',
			opacity:.9,
		},
		boxIntroImg:{
			backgroundImage:`url(${HeadMaster})`,
		},
		boxIntroNoImg:{
			backgroundImage:'none'
		},
		boxIntroDialog:{
			padding:theme.spacing(5)
		},
		fullWidthContainer: {
			maxWidth: '100vw',
		},
		backgroundTheme: {
			backgroundColor:bg
		},
		aboutReadMore: {
			fontFamily:'Inter',
			marginTop: theme.spacing(4)
		},
		studyContent:{
			transition:'all .3s ease-in-out',
			position:'relative',
			clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 90%)",
			padding:theme.spacing(10),
			'&:before':{
				transition:'all .3s ease-in-out',
				clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0 100%)",
				zIndex:-1,
				background:`${solidBackground},url(${backgroundStudy}) no-repeat center center fixed`,
				backgroundSize:'cover',
				position:'absolute',
				top:'50%',
				left:0,
				content:'""',
				width:"100%",
				height:0
			},
			'&:hover':{
				color:theme.palette.text.primary,
			},
			'&:hover::before':{
				top:0,
				height:"100%"
			},
		},
		mt4:{
			marginTop:theme.spacing(4)
		},
		paperPadding:{
			padding:theme.spacing(3)
        },
		VisbyBold:{
			fontFamily:'VisbyBold'
		}
	})
});

export default mainStyles
