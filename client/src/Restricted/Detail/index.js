import React, {useState, useEffect} from 'react'
import {Grid, CssBaseline, Box, Paper, Typography, Divider, Table, TableBody, TableCell, TableHead, TableRow, Button} from '@material-ui/core'
import {Menu} from '../../base/Menu'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import {Link} from '@reach/router'

import {Footer} from '../../base/Footer'
import axios from 'axios'
import {Loader} from '../../Public/components/Loader/index'

const Detail = params => {
	const [surveyData, setSurveyData] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		axios('http://localhost:3030/survey/' + params.surveyId).then(result => {
			setSurveyData(result.data.survey.surveyData)
		})
		setIsLoading(false)
	}, [])

	const scaleTranslation = [
		'Frequency',
		'Complexity',
		'Ease of Use',
		'Support',
		'Integration',
		'Consistency',
		'Learnability',
		'Encumbrance',
		'Confidence',
		'Uptake'
	]

	return (
		<React.Fragment>
			<CssBaseline />
			<Menu />
			<Box p={4}>

				<Grid container spacing={3}>
					<Grid item xs={3}>
						<Paper>
							<Box p={2}>
								<Button variant="contained" color="primary" size="large" startIcon={<ArrowBackIosIcon />} component={Link} to="/dashboard">
									Dashboard
								</Button>
							</Box>
						</Paper>
					</Grid>

					<Grid item xs={9}>
						<Paper>
							<Box p={2} display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
								<Typography variant="h5" color="textPrimary">
									{`Survey`}
								</Typography>
								<Typography variant="h5" color="textSecondary">
									{params.surveyId}
								</Typography>
							</Box>
						</Paper>
					</Grid>

				</Grid>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Paper>
							{isLoading
								? <Loader />
								: <Box p={2}>
										<Table>
											<TableHead>
												<TableRow>
													{scaleTranslation.map((scale, index) => {
														return <TableCell key={scale + '-' + index}>{scale}</TableCell>
													})}
												</TableRow>
											</TableHead>
											<TableBody>
												<TableRow>
													{isLoading
														? <Loader />
														: surveyData.map((scale, index) => {
																return (
																	<TableCell>
																		{scale.scales.value}
																	</TableCell>
																)
															})}

												</TableRow>
											</TableBody>
										</Table>
									</Box>}

						</Paper>
					</Grid>
				</Grid>
				<Footer />
			</Box>
		</React.Fragment>
	)
}

export default Detail
