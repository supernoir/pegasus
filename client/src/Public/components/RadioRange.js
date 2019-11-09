import React from 'react';
//import Radio from './Radio';
import {Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio as MUIRadio} from "@material-ui/core"

export default class RadioRange extends React.Component{
	constructor(props){
		super(props);
	}
	extendRange (range) {
		let firstItem = range[0];
		let lastItem = range[1];

		const tempArray = [];
		for (let i = firstItem; i <= lastItem; i++){
			tempArray.push(i);
		}
		return tempArray;
	}
	handleChange (evt) {
		console.log(evt.target.value);
	}

/* 	displayRadioRange () {
		const extendedRange = this.extendRange(this.props.range);
		return extendedRange.map((val, index) => <Radio key={index} id={index} label={val} radioContext={this.props.context} type={'radio'} store={this.props.store}/>);
	};
 */	
	displayRadioRange () {
		const extendedRange = this.extendRange(this.props.range);
		return (
			<RadioGroup name={this.props.context} value={this.props.context} onChange={this.handleChange}>
				<Box display="flex" flexDirection="row">
			{ extendedRange.map((val, index) => {
				return (
					<FormControlLabel key={index} value={val} control={<MUIRadio />} label={val} />
					)
				})
			}
			</Box>
			</RadioGroup>
		)
	};

	render(){
		return (
			<FormControl component="fieldset">
				<Box py={1} display="flex" justifyContent="space-between" alignItems="center">
					<FormLabel component="legend">{'Strongly disagree'}</FormLabel>
						{this.displayRadioRange()}
					<FormLabel component="legend">{'Strongly agree'}</FormLabel>
				</Box>
			</FormControl>
		);
	}
}