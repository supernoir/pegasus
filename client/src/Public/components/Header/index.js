import React from 'react'
import * as customApp from '../../../config/sus_app_config.json'
import {Typography, Box, Paper} from '@material-ui/core'

export const Header = () => {
	return (
		<Box mb={2}>
			<Paper>
				<Box p={4} maxWidth="lg">
					<Typography component="h2" variant="h2" align="center" color="textPrimary">
						{customApp && customApp.app.name}
					</Typography>
					<Typography variant="h3" align="center" color="textSecondary" paragraph>
						{customApp && customApp.app.description}
					</Typography>
					<Typography variant="h5" align="center" color="textSecondary" paragraph>
						{customApp && customApp.app.greeting}
					</Typography>
				</Box>
			</Paper>
		</Box>
	)
}
