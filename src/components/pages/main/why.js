import React from 'react'
import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import mainStyles from './styles'
import CustomTitle from '../../nano/customTitle'

const Why = () => {

    const classes = mainStyles()

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
						<Card className="wow animate__backInLeft" data-wow-delay={`${delay}s`}>
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

    return(
        <Grid container className={classes.boxWhy}>
            <Grid item xs={12} className="wow animate__bounceInLeft" data-wow-offset="250">
                <CustomTitle>
                    Keunggulan
                </CustomTitle>
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

export default Why