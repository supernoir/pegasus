import React from 'react'
import {CircularProgress, Box} from '@material-ui/core'

const Loader = () => {
	return (
		<Box p={2} display="flex" flexDirection="row" alignItems="center" justifyContent="center">
			<CircularProgress />
		</Box>
	)
}

export default Loader
