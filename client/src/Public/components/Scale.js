import React, { useState } from 'react';
import RadioRange from './RadioRange';
import * as config from '../../config/susconfig.json';
import { Box, Paper, Divider, Button } from '@material-ui/core';
import { textAlign } from '@material-ui/system';

const Scale = ({store}) => {

	const [scales, setScales] = useState([]);
	const [value, setValue] = useState('');

	console.log(value)

	const handleSubmit = (evt) => {
		evt.preventDefault();
		//this.props.store.dispatch(compileScales(this.props.input));
	}

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
											<RadioRange setValue={setValue} range={config.range} context={item.type} value={value}/>
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
							<Button variant="contained" color="primary" id={'surveysubmit'} onClick={handleSubmit}>
							Submit Survey
							</Button>
						</Box>
					</Paper>
				</Box>
			</form>
		);
}

export default Scale