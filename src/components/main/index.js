import React from 'react'
import clsx from 'clsx'
import { Grid, Typography, Container, Divider, Card, CardContent } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import HeadMaster from '../../assets/images/kepalasekolah.png'
import aboutBackground from '../../assets/images/tefa.jpg'
import { CustomButton } from '../styling';
import { ArrowForward } from '@material-ui/icons';
import { Link } from 'react-router-dom';

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
	boxIntro:{
		margin: theme.spacing(15, 0, 15, 0)
	},
	aboutReadMore: {
		marginTop: theme.spacing(4)
	},
	mt4:{
		marginTop:theme.spacing(4)
	}
}));

const Main = () => {

	const classes = useStyles();

	const Intro = () => {
		return(
			<Grid container className={classes.boxIntro}>
				<Grid item xs={4}>
					<img alt="Kepala Sekolah" title="Kepala Sekolah" style={{}} src={HeadMaster} />
				</Grid>
				<Grid item xs={8}>
					<Typography variant="h4">
						Sambutan Kepala Sekolah
					</Typography>
					<Divider style={{marginBottom:10,marginTop:10}}/>
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
					<Grid container spacing={2} className={classes.mt4}>
						<CardWhy title="SSS">
							manakutau
						</CardWhy>
						<CardWhy title="SSS">
							manakutau
						</CardWhy>
						<CardWhy title="SSS">
							manakutau
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

	const Maps = () => {
		return(
			<Grid container className={classes.boxIntro}>
				<Grid item xs={12} style={{marginBottom:30}}>
					<Typography variant="h4" align="center" style={{marginBottom:10}}>
						Temukan Kami
					</Typography>
					<Typography style={{fontFamily:'InterNormal'}} align="center">
						Alamat SMK Bina Taruna Jalancagak berada di Jl. Bunihayu No. 76 RT.18 / RW.03, Desa. Jalancagak, Kabupaten Subang, Jawa Barat 41281
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
		<Grid container className={classes.aboutBG}>
			<About />
		</Grid>
		<Container maxWidth="lg">	
			<Why />
		</Container>
		<Maps />
		</div>
	)
}

export default Main