import React from 'react'
import {CssBaseline, Box, Paper, Typography} from '@material-ui/core'
import {Menu} from '../../base/Menu'
import {Footer} from '../../base/Footer'
import {Header} from '../components/Header/index'
import Scale from '../components/Scale/index'

export default class Success extends React.Component {
	render() {
		return (
			<React.Fragment>
				<CssBaseline />
				<Menu />
				<Box p={4}>
					<Paper>
						<Box p={3}>
							<Typography component="h2" variant="h2" align="center" color="textPrimary">
								Thank you for your time
							</Typography>
						</Box>
					</Paper>
				</Box>
			</React.Fragment>
		)
	}
}
