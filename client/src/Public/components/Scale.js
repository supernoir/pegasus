import React from 'react';
import RadioRange from './RadioRange';
import * as config from '../../config/susconfig.json';
import { compileScales } from '../../actions/compileScales';
import { Box, Paper, Divider, Button } from '@material-ui/core';
import { textAlign } from '@material-ui/system';

export default class Scale extends React.Component {
	constructor(){
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			scales: []
		}
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
						return (<Box mb={1} key={index}>
									<Paper>
										<Box p={3}>
											<b>{item.type}</b>
											<p>{item.label}</p>
											<Divider/>
											<RadioRange range={config.range} context={item.type} store={this.props.store}/>
										</Box>
									</Paper>
								</Box>
						);
					})
				}
				</div>
				<Box mb={1}>
					<Paper>
						<Box p={3} textAlign={"center"}>
							<Button variant="contained" color="primary" id={'surveysubmit'} onClick={this.handleSubmit}>
							Submit Survey
							</Button>
						</Box>
					</Paper>
				</Box>
			</form>
		);
	}
}