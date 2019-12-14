import React, {useState, useEffect} from 'react'
import {Grid, CssBaseline, Box, Paper, Typography, Divider, Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core'
import {ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts'
import {Menu} from '../../base/Menu'
import {Footer} from '../../base/Footer'
import axios from 'axios'
import {Loader} from '../../Public/components/Loader'
import {Link} from '@reach/router'

const Dashboard = () => {
	const [scoreAvg, setScoreAvg] = useState('-')
	const [totalSurveys, setTotalSurveys] = useState('-')
	const [scales, setScales] = useState([])
	const [surveyData, setSurveyData] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		axios('http://localhost:3030/scores/metrics').then(result => {
			setScoreAvg(result.data.scoreAvg)
			setTotalSurveys(result.data.totalSurveys)
		})
		axios('http://localhost:3030/survey').then(result => {
			setSurveyData(result.data.surveys)
		})

		axios('http://localhost:3030/scores/scales').then(result => {
			let arr = []
			for (const [name, value] of Object.entries(result.data.scales)) {
				if (value !== null) {
					arr.push({name, value})
				}
			}
			setScales(arr)
		})
		setIsLoading(false)
	}, [])

	return (
		<React.Fragment>
			<CssBaseline />
			<Menu />
			<Box p={4}>

				<Grid container spacing={3}>
					<Grid item xs={6}>
						<Paper>
							{isLoading
								? <Loader />
								: <Box p={2} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
										<Typography variant="h2" color="textSecondary">
											Number of Surveys:
										</Typography>
										<Box mx={1}>
											<Divider orientation="vertical" />
										</Box>
										<Typography variant="h2" color="textPrimary">
											{totalSurveys !== void 0 ? totalSurveys : '-'}
										</Typography>
									</Box>}

						</Paper>
					</Grid>
					<Grid item xs={6}>
						<Paper>
							{isLoading
								? <Loader />
								: <Box p={2} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
										<Typography variant="h2" color="textSecondary">
											Score Average
										</Typography>
										<Box mx={1}>
											<Divider orientation="vertical" />
										</Box>
										<Typography variant="h2" color="textPrimary">
											{scoreAvg !== void 0 ? scoreAvg : '-'}
										</Typography>
									</Box>}
						</Paper>
					</Grid>
					<Grid item xs={6}>
						<Paper>
							{isLoading
								? <Loader />
								: <Box p={2} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
										<ResponsiveContainer width="95%" height={400}>
											<BarChart data={scales}>
												<CartesianGrid strokeDasharray="3 3" />
												<XAxis dataKey="name" />
												<YAxis />
												<Tooltip />
												<Legend />
												<Bar name="Score" dataKey="value" fill="#8884d8" />
											</BarChart>
										</ResponsiveContainer>
									</Box>}
						</Paper>
					</Grid>
					<Grid item xs={6}>
						<Paper>

							<Table>
								<TableHead>
									<TableRow>
										<TableCell>ID</TableCell>
										<TableCell align="right">Score</TableCell>
										<TableCell align="right">Creation Date</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{surveyData &&
										surveyData.map(survey => {
											return (
												<TableRow>
													<TableCell>
														<Link to={'/detail/' + survey.surveyId}>
															{survey.surveyId}
														</Link>
													</TableCell>
													<TableCell align="right">{survey.surveyScore}</TableCell>
													<TableCell align="right">{survey.createdAt}</TableCell>
												</TableRow>
											)
										})}

								</TableBody>
							</Table>

						</Paper>
					</Grid>
				</Grid>
				<Footer />
			</Box>
		</React.Fragment>
	)
}

export default Dashboard
