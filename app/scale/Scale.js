import React from 'react';
import RadioRange from './RadioRange';
import * as config from '../config/susconfig';
import { compileScales } from '../actions/compileScales';

//interface ScaleProps {}

export default class Scale extends React.Component {
	constructor(){
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit (evt) {
		evt.preventDefault();
		this.props.store.dispatch(compileScales(this.props.input));
	}

	render(){
		return(
			<form>
				<div className="sus-scale-container">
					{config.scale.map((item, index)=> {
						return (<div key={index} className="sus-scale-scaleitem">
							<b>{item.type}</b>
							<RadioRange range={config.range} label={item.label} context={item.type} store={this.props.store}/>
						</div>
						);
					})
					}
				</div>
				<button id={'surveysubmit'} onClick={this.handleSubmit} type="button">Submit Survey</button>
			</form>
		);
	}
}