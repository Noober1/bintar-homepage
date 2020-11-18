import React, { useEffect } from 'react'
import clsx from 'clsx'
import { Grid, Typography, Container, Divider, Box, useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { WOW } from 'wowjs';

import backgroundHeader from '../../../assets/images/backgroundHeader.jpg'

import { useGlobal } from 'reactn'
import mainStyles from './styles';

import Maps from './maps'
import Why from './why'
import About from './about'
import StudyList from './study'
import Affiliation from './affiliation'

const Main = () => {

	const hideAboutBoxImg = useMediaQuery('(min-width:960px)');
	const [ webName ] = useGlobal('webName')

	useEffect(() => {
		document.title = `Selamat datang di ${webName}`;

		new WOW({
			animateClass:'animate__animated',
			live: false
		}).init();

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

	const classes = mainStyles();
	const theme = useTheme();

	const Intro = () => {
		return(
			<Grid container className={clsx("wow animate__fadeIn",classes.boxIntro, (hideAboutBoxImg ? classes.boxIntroImg : ''))} data-wow-offset="350">
				<Grid item xs={12} md={5} lg={4}>
					<Box display={{ xs: 'none', sm: 'none', md: 'block' }}/>
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

	return (
		<>
			<Grid container id="mainHeader" className={clsx(classes.mainHeader, "wow animate__fadeIn")} data-wow-delay=".3s">
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
			<About />
			<Why />
			<StudyList />
			<Affiliation />
			<Maps />
		</>
	)
}

export default Main