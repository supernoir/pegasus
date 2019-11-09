import React from 'react';
import { addScaleInput } from '../../actions/index';

export default class Radio extends React.Component{
	constructor(props){
		super(props);
		this.handleSelect = this.handleSelect.bind(this);
	}
	handleSelect (evt) {
		let currentRadioSelection = {
			context: this.props.radioContext || '',
			value  : evt.target.parentNode.textContent || ''
		};

		this.props.store.dispatch(addScaleInput(currentRadioSelection));
	}
	render(){
		return(
			<label>
				<input type="radio" name={this.props.radioContext} label={this.props.label} key={this.props.id} onClick={this.handleSelect}/>
				{this.props.label}
			</label>
		);
	}
};