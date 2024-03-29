import React, {useState} from 'react'
import {Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio as MUIRadio} from '@material-ui/core'

const RadioRange = ({range, id, context, survey, setSurvey}) => {
	const [selected, setSelected] = useState('')

	const extendRange = range => {
		let firstItem = range[0]
		let lastItem = range[1]

		const tempArray = []
		for (let i = firstItem; i <= lastItem; i++) {
			tempArray.push(i)
		}
		return tempArray
	}

	const handleChange = event => {
		let nextVal = event.target.value
		setSelected(nextVal)
		setSurvey([{scales: {id: id, value: Number(nextVal)}}, ...survey])
	}

	const displayRadioRange = () => {
		const extendedRange = extendRange(range)
		return (
			<RadioGroup name={context} onChange={handleChange}>
				<Box display="flex" flexDirection="row" width="100%">
					{extendedRange.map((val, index) => {
						return <FormControlLabel key={index} checked={val === Number(selected)} value={val} control={<MUIRadio />} label={val} />
					})}
				</Box>
			</RadioGroup>
		)
	}

	return (
		<FormControl fullWidth>
			<Box py={1} display="flex" justifyContent="space-between" alignItems="center">
				<FormLabel>{'Strongly disagree'}</FormLabel>
				{displayRadioRange()}
				<FormLabel>{'Strongly agree'}</FormLabel>
			</Box>
		</FormControl>
	)
}

export default RadioRange
