import React, {useState} from 'react'
import RadioRange from '../RadioRange'
import * as config from '../../../config/susconfig.json'
import {Box, Paper, Divider, Button} from '@material-ui/core'
import {textAlign} from '@material-ui/system'
import axios from 'axios'
import {navigate} from '@reach/router'

const Scale = ({}) => {
	const baseUrl = 'http://localhost:3030'
	const [survey, setSurvey] = useState([])

	const handleSubmit = evt => {
		evt.preventDefault()
		axios.post(baseUrl + '/survey', survey).then(() => navigate('/success')).catch(() => navigate('/failure'))
	}

	return (
		<form>
			{config.scale.map((item, index) => {
				return (
					<Box mb={1} key={index}>
						<Paper>
							<Box p={3}>
								<b>{item.type}</b>
								<p>{item.label}</p>
								<Divider />
								<RadioRange setSurvey={setSurvey} range={config.range} id={item.id} context={item.type} survey={survey} />
							</Box>
						</Paper>
					</Box>
				)
			})}
			<Box mb={1}>
				<Paper>
					<Box p={3} textAlign={'center'}>
						<Button variant="contained" color="primary" id={'surveysubmit'} onClick={handleSubmit}>
							Submit Survey
						</Button>
					</Box>
				</Paper>
			</Box>
		</form>
	)
}

export default Scale
