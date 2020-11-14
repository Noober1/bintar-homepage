import React, { useEffect } from 'react'
import clsx from 'clsx'
import { Grid, Typography, Container, Divider, Card, CardContent, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import HeadMaster from '../../../assets/images/kepalasekolah.png'
import aboutBackground from '../../../assets/images/tefa.jpg'
import { CustomButton } from '../../styling';
import { ArrowForward } from '@material-ui/icons';
import { Link } from 'react-router-dom';

import backgroundHeader from '../../../assets/images/backgroundHeader.jpg'

const useStyles = makeStyles((theme) => ({
	title: {
		margin: theme.spacing(15, 'auto')
	},
	aboutBG:{
		backgroundImage:`url(${aboutBackground})`,
		backgroundRepeat:'no-repeat',
		backgroundPosition:'center',
		backgroundSize:'cover'
	},
	titleText:{
		flexGrow: 1,
		fontFamily: 'Inter',
		fontWeight: 'Bold'
	},
	mainHeader:{
		background:`linear-gradient(180deg, transparent 0%, ${theme.palette.background.default} 75%, ${theme.palette.background.default} 100%)`
	},
	boxIntro:{
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
	fullWidthContainer: {
		maxWidth: '100vw',
	},
	backgroundTheme: {
		backgroundColor:theme.palette.background.default
	},
	aboutReadMore: {
		marginTop: theme.spacing(4)
	},
	mt4:{
		marginTop:theme.spacing(4)
	},
	VisbyBold:{
		fontFamily:'VisbyBold'
	}
}));

const Main = () => {

	useEffect(() => {
		document.title = 'Beranda';
		const mainContentDOM = document.querySelector('#body');
		
		if (mainContentDOM !== null) {
			let { style } = mainContentDOM;
			style.backgroundImage = `url(${backgroundHeader})`
			style.backgroundPosition = 'center center'
			style.backgroundRepeat = 'no-repeat'
			style.backgroundSize = 'cover'
		}
	}, [])

	const classes = useStyles();

	const Intro = () => {
		return(
			<Grid container className={classes.boxIntro} spacing={2}>
				<Grid item xs={12} md={4} lg={4}>
					<Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
						<img alt="Kepala Sekolah" title="Kepala Sekolah" width="100%" src={HeadMaster} />
					</Box>
				</Grid>
				<Grid item xs={12}  md={8} lg={8}>
					<Typography variant="h4" className={classes.VisbyBold}>
						Sambutan Kepala Sekolah
					</Typography>
					<Divider style={{marginBottom:30,marginTop:10}}/>
					<Typography style={{fontFamily:'InterNormal'}}>
						Assalamualaikum Wr.Wb<br/>
						Selamat datang di Website kami Sekolah Menengah Kejuruan Negeri 13 Bandung. Media ini saya tujukan untuk seluruh unsur pimpinan, guru, karyawan dan siswa serta masyarakat guna dapat mengakses seluruh informasi tentang segala profil, kegiatan serta fasilitas sekolah kami.Saya selaku pimpinan mengucapkan terima kasih kepada Tim Manajemen dan Tim IT yang telah berusaha untuk dapat lebih memperkenalkan segala perihal yang dimiliki oleh sekolah. Saya berharap Website ini dapat dijadikan sarana interaksi yang positif baik antar warga sekolah maupun masyarakat pada umumnya sehingga informasi dapat tersampaikan dengan baik. Semoga Allah SWT memberikan kekuatan bagi kita semua untuk mencerdaskan anak-anak bangsa.Wassalamualikum Wr.Wb<br/><br/>
					</Typography>
					<Typography style={{fontWeight:'bold'}}>
						Kepala Sekolah
					</Typography>
				</Grid>
			</Grid>
		)
	}

	const About = () => {
		return(
			<Grid container className={classes.boxIntro}>
				<Grid item xs={12}>
					<Container maxWidth="lg" style={{color:'white'}}>
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
			<Grid container className={classes.boxIntro}>
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
						<CardWhy title="Sekolah Terbaik">
							SMK Bina Taruna Jalancagak adalah SMK terbaik di Wilayah Subang
						</CardWhy>
						<CardWhy title="Infrastruktur yang lengkap">
							SMK Bina Taruna Jalancagak terdiri dari x ruang kelas, x ruang praktek, x kantin dan x teaching factory.
						</CardWhy>
						<CardWhy title="Pembimbing yang professional">
							SMK Bina Taruna Jalancagak mempunyai banyak tenaga pendidik yang profesional di bidangnya
						</CardWhy>
						<CardWhy title="Kerjasama dengan industri besar">
							SMK Bina Taruna Jalancagak bekerja sama dengan industri-industri ternama di indonesia
						</CardWhy>
					</Grid>
				</Grid>
			</Grid>
		)
	}

	const CardWhy = ({title, children}) => {
		return(
			<Grid item xs={12} md={6} lg={4}>
				<Card>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{title}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{children || 'Kosong'}
						</Typography>
					</CardContent>
				</Card>
			</Grid>
		)
	}

	const StudyList = () => {
		return(
			<Grid container className={classes.boxIntro}>
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
		<div className="animate__animated animate__fadeIn">
			<Grid container id="mainHeader" className={classes.mainHeader}>
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
				<Container maxWidth="lg">	
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
		</div>
	)
}

export default Main