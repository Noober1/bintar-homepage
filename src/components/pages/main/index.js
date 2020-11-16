import React, { useEffect } from 'react'
import clsx from 'clsx'
import { Grid, Typography, Container, Divider, Card, CardContent, Box, useMediaQuery } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import HeadMaster from '../../../assets/images/kepalasekolah.png'
import aboutBackground from '../../../assets/images/tefa.jpg'
import { CustomButton } from '../../styling';
import { ArrowForward } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import WOW from 'wowjs';

import backgroundHeader from '../../../assets/images/backgroundHeader.jpg'
import hex2Rgba from '../../nano/hex2rgba'
import { useGlobal } from 'reactn'

const useStyles = makeStyles((theme) => {
	var bg = theme.palette.background.default

	return ({
		title: {
			margin: theme.spacing(15, 'auto')
		},
		aboutBG:{
			backgroundImage:`linear-gradient(${hex2Rgba(bg,.7)} 0%, ${hex2Rgba(bg,.7)} 100%),url(${aboutBackground})`,
			backgroundRepeat:'no-repeat',
			backgroundAttachment:'fixed',
			backgroundPosition:'center',
			backgroundSize:'cover',
			minHeight:'500px',
			height:'100vh',
			maxHeight:'700px',
			alignItems:'center'
		},
		titleText:{
			fontFamily: 'Inter',
			fontWeight: 'Bold',
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
			background:`linear-gradient(180deg, transparent 0%, ${theme.palette.background.default} 75%, ${theme.palette.background.default} 100%)`
		},
		boxContent:{
			margin: theme.spacing(15, 0, 15, 0)
		},
		
		boxAffiliation:{
			padding: theme.spacing(15, 0, 15, 0),
			backgroundColor:'white',
			color:'black',
			boxShadow: '0px 0px 35px 1px rgba(122,122,122,0.46)'
		},
		boxMaps:{
			padding: theme.spacing(15, 0, 15, 0),
		},
		boxIntro:{
			backgroundPosition:'bottom left',
			backgroundSize:'contain',
			backgroundRepeat:'no-repeat',
			height:'100%',
			opacity:.9
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
			backgroundColor:theme.palette.background.default
		},
		aboutReadMore: {
			fontFamily:'Inter',
			marginTop: theme.spacing(4)
		},
		mt4:{
			marginTop:theme.spacing(4)
		},
		VisbyBold:{
			fontFamily:'VisbyBold'
		}
	})
});

const Main = () => {

	const hideAboutBoxImg = useMediaQuery('(min-width:960px)');
	const [darkMode, setDarkMode] = useGlobal('darkMode')

	new WOW.WOW({
		animateClass:'animate__animated',
		live: false
	}).init();

	useEffect(() => {
		document.title = 'Beranda';

		const mainContentDOM = document.querySelector('#body');
		
		if (mainContentDOM !== null) {
			let { style } = mainContentDOM;
			style.backgroundImage = `url(${backgroundHeader})`
			style.backgroundPosition = 'top center'
			style.backgroundAttachment = 'fixed'
			style.backgroundRepeat = 'no-repeat'
			style.backgroundSize = 'cover'
		}

		return true
		
	}, [])

	const classes = useStyles();

	const Intro = () => {
		return(
			<Grid container className={clsx("wow animate__fadeIn",classes.boxIntro, (hideAboutBoxImg ? classes.boxIntroImg : ''))} data-wow-offset="550">
				<Grid item xs={12} md={5} lg={4}>
					<Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
						
					</Box>
				</Grid>
				<Grid item xs={12}  md={7} lg={8} className={classes.boxIntroDialog}>
					<Typography align="center" variant="h4" className={classes.VisbyBold}>
						Sambutan Kepala Sekolah
					</Typography>
					<Divider style={{marginBottom:30,marginTop:10}}/>
					<Typography align="center" style={{fontFamily:'Visby'}}>
						Assalamualaikum Wr.Wb<br/>
						Selamat datang di Sekolah Menengah Kejuruan(SMK) Bina Taruna Jalancagak. Media ini saya tujukan untuk seluruh unsur pimpinan, guru, karyawan dan siswa serta masyarakat guna dapat mengakses seluruh informasi tentang segala profil, kegiatan serta fasilitas sekolah kami.<br/>Saya selaku pimpinan mengucapkan terima kasih kepada Tim Manajemen dan Tim IT yang telah berusaha untuk dapat lebih memperkenalkan segala perihal yang dimiliki oleh sekolah.<br/>Saya berharap situs ini dapat dijadikan sarana interaksi yang positif baik antar warga sekolah maupun masyarakat pada umumnya sehingga informasi dapat tersampaikan dengan baik.<br/>Semoga Allah SWT memberikan kekuatan bagi kita semua untuk mencerdaskan anak-anak bangsa.<br/>Wassalamualikum Wr.Wb<br/><br/>
					</Typography>
					<Typography align="center" variant="subtitle1" style={{fontWeight:'bold'}}>
						Kepala Sekolah
					</Typography>
					<Typography align="center" variant="subtitle1">
						Dedi Rohimat, ST.
					</Typography>
				</Grid>
			</Grid>
		)
	}

	const About = () => {
		return(
			<Grid container className="wow animate__fadeInUp" data-wow-offset="250">
				<Grid item xs={12}>
					<Container maxWidth="lg">
						<Typography variant="h4" align="center" style={{marginBottom:10}}>
							Tentang Sekolah
						</Typography>
						<Typography style={{fontFamily:'InterNormal'}} align="center">
							SMK Bina taruna adalah Sekolah Menengah Kejuruan yang berada di Kota Subang. Sekolah yang berdiri pada tahun 2001 ini memiliki 5 Bidang Kompetensi Keahlian, diantaranya: Teknik Kendaraan Ringan(TKR), Teknik Komputer dan Jaringan(TKJ), Jasa Boga(JB), Teknik dan Bisnis Sepeda Motor(TBSM) dan Akomodasi Perhotelan(APH).<br/>	
							<Link to="/About" style={{textDecoration:'none'}}>
								<CustomButton className={classes.aboutReadMore} lefticon={<ArrowForward/>}>Baca Selengkapnya</CustomButton>
							</Link>
						</Typography>
					</Container>
				</Grid>
			</Grid>
		)
	}

	const Why = () => {
		return(
			<Grid container className={clsx(classes.boxContent, "wow animate__bounceInLeft")} data-wow-offset="200">
				<Grid item xs={12}>
					<Typography variant="h4" align="center" style={{marginBottom:10}}>
						Kenapa harus sekolah di SMK Bina Taruna Jalancagak?
					</Typography>
					<Typography style={{fontFamily:'InterNormal'}} align="center">
						Berikut beberapa keunggulan SMK Bina Taruna Jalancagak
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={2} className={classes.mt4} direction="row" justify="center">
						<CardWhy delayStart={.5} delayRange={.3}/>
					</Grid>
				</Grid>
			</Grid>
		)
	}

	const CardWhy = ({delayStart, delayRange}) => {

		var delay = delayStart;
		const reasonData = [
			{
				title:"Sekolah terbaik",
				desc:"<strong>SMK Bina Taruna Jalancagak</strong> adalah SMK terbaik di Wilayah Subang."
			},
			{
				title:"Infrastruktur yang lengkap",
				desc:"<strong>SMK Bina Taruna Jalancagak</strong> terdiri dari x ruang kelas, x ruang praktek, kantin, lapangan olahraga, <strong>Teaching Factory, Mini Hotel</strong>, dsb."
			},
			{
				title:"Pembimbing yang professional",
				desc:"<strong>SMK Bina Taruna Jalancagak</strong> mempunyai banyak tenaga pendidik yang profesional di bidangnya."
			},
			{
				title:"Lembaga Sertifikasi Profesi",
				desc:"<strong>SMK Bina Taruna Jalancagak</strong> mempunyai sertifikat <strong>LSP P1</strong> yang berfungsi sebagai Lembaga yang memastikan kompetensi dengan menyediakan <strong>Pendidikan Vokasi</strong> atau pekerjaan yang berdasarkan kualifikasi atau keahlian."
			},
			{
				title:"Lulusannya mudah bekerja",
				desc:"Siswa lulusan di <strong>SMK Bina Taruna Jalancagak</strong> mudah mencari pekerjaan karena kami mempunyai <strong>Bursa Kerja Khusus(BKK)</strong> yang akan memudahkan lulusan untuk mencari pekerjaan."
			}
		]

		return(
			<>
			{reasonData.map((value, index) => {
				delay = delay + delayRange;
				return(
					<Grid key={value.title} item xs={12} md={6} lg={4}>
						<Card className="wow animate__fadeInLeft" data-wow-delay={`${delay}s`}>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									{value.title}
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p" dangerouslySetInnerHTML={{ __html: value.desc }}/>
							</CardContent>
						</Card>
					</Grid>
				)
			})}
			</>
		)
	}

	const StudyList = () => {
		return(
			<Grid container className={classes.boxContent}>
				ss
			</Grid>
		)
	}

	const Affiliation = () => {
		return(
			<Grid container className={classes.boxAffiliation}>
				<Grid item xs={12} style={{marginBottom:30}}>
					<Typography variant="h4" align="center" style={{marginBottom:10}}>
						Kerjasama Industri
					</Typography>
					<Typography style={{fontFamily:'InterNormal'}} align="center">
						Kami juga bekerja sama dengan beberapa industri besar
					</Typography>
				</Grid>
				<Grid item xs={12} style={{margin:3}}>
					<Typography align="center">
						<a href="https://auto2000.co.id" target="_blank" rel="noopener noreferrer" title="Toyota Auto2000"><img src="https://smkbintarjalancagak.sch.id/wp-content/uploads/2019/09/auto2000-mini-150x140.png" width="150" height="140" alt="" className="wp-image-640 alignnone size-thumbnail" /></a>    <a href="https://www.yamaha-motor.co.id" target="_blank" rel="noopener noreferrer" title="Yamaha"><img src="https://smkbintarjalancagak.sch.id/wp-content/uploads/2019/09/yamaha-mini-1-150x140.png" width="150" height="140" alt="Yamaha" className="wp-image-697 alignnone size-thumbnail" /></a>    <a href="https://www.telkom.co.id/" target="_blank" rel="noopener noreferrer" title="Telkom Indonesia"><img src="https://smkbintarjalancagak.sch.id/wp-content/uploads/2019/09/telkom-mini-150x140.png" width="150" height="140" alt="" className="wp-image-646 alignnone size-thumbnail" /></a>   <a href="https://aqua.co.id/" target="_blank" rel="noopener noreferrer" title="Aqua Danone"><img src="https://smkbintarjalancagak.sch.id/wp-content/uploads/2019/09/aqua-mini-150x140.png" width="150" height="140" alt="Aqua Danone" className="wp-image-702 alignnone size-thumbnail" /></a>    <a href="https://graciaspa.com/" target="_blank" rel="noopener noreferrer" title="Gracia Spa Resort"><img src="https://smkbintarjalancagak.sch.id/wp-content/uploads/2019/09/gracia-mini-150x140.png" width="150" height="140" alt="" className="wp-image-641 alignnone size-thumbnail" /></a>    <a href="http://prama-grand-preanger.bandung-hotels.com/en/" target="_blank" rel="noopener noreferrer" title="Prama Grand Preanger Bandung"><img src="https://smkbintarjalancagak.sch.id/wp-content/uploads/2019/09/prama-mini-150x140.png" width="150" height="140" alt="Prama Grand Preanger Bandung" className="wp-image-698 alignnone size-thumbnail" /></a>   <img src="https://smkbintarjalancagak.sch.id/wp-content/uploads/2019/09/prn-mini-150x140.png" width="150" height="140" alt="PT. Perkakas Rekadaya Nusantara" className="wp-image-701 alignnone size-thumbnail" />   <a href="http://bandung.jayakartahotelsresorts.com" target="_blank" rel="noopener noreferrer" title="Jayakarta Hotel Bandung"><img src="https://smkbintarjalancagak.sch.id/wp-content/uploads/2019/09/jayakarta-mini-150x140.png" width="150" height="140" alt="Jayakarta Hotel Bandung" className="wp-image-703 alignnone size-thumbnail" /></a>
					</Typography>
				</Grid>
			</Grid>
		)
	}

	const Maps = () => {
		return(
			<Grid container className={clsx(classes.boxMaps, classes.backgroundTheme)}>
				<Grid item xs={12} style={{marginBottom:30}}>
					<Typography variant="h4" align="center" style={{marginBottom:10}}>
						Temukan Kami
					</Typography>
				</Grid>
				<Grid item xs={12}>
					{/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253658.89923356072!2d107.4289214851453!3d-6.594570112714671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69226e7a838ddb%3A0x35c5aa1b9dfb3a2c!2sSMK%20Bina%20Taruna%20Jalancagak!5e0!3m2!1sen!2sid!4v1568446142651!5m2!1sen!2sid" width="100%" height="500px" frameBorder="0" style={{border:0}} allowFullScreen></iframe> */}
				</Grid>
			</Grid>
		)
	}

	return (
		<>
			<Grid container id="mainHeader" className={clsx(classes.mainHeader, "wow animate__fadeIn")}>
				<Grid container>
					<Grid item xs={12} className={classes.title}>
						<Typography variant="h1" align="center" className={classes.titleText}>
							SMK Bina Taruna<br/>Jalancagak
						</Typography>
						<Typography variant="h4" align="center" style={{marginTop:10}}>
							Catching The Bright Future
						</Typography>
					</Grid>
				</Grid>
				<Container style={{padding:'0px'}}>	
					<Intro />
				</Container>
			</Grid>
			<Grid container className={classes.aboutBG}>
				<About />
			</Grid>
			<Grid container className={classes.backgroundTheme}>
				<Container maxWidth="lg">	
					<Why />
				</Container>
				<Container maxWidth="lg">	
					<StudyList />
				</Container>
			</Grid>
			<Affiliation />
			<Maps />
		</>
	)
}

export default Main