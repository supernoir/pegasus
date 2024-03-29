import React from 'react'
import {CssBaseline, Box} from '@material-ui/core'
import {Menu} from '../../base/Menu'
import {Footer} from '../../base/Footer'
import {Header} from './../components/Header/index'
import Scale from '../components/Scale/index'

export default class Survey extends React.Component {
	render() {
		return (
			<React.Fragment>
				<CssBaseline />
				<Menu />
				<Box p={4}>
					<Header />
					<Scale />
					<Footer />
				</Box>
			</React.Fragment>
		)
	}
}
