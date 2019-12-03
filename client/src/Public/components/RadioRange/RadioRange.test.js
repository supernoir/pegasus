import React from 'react'
import renderer from 'react-test-renderer'
import RadioRange from './index'
import * as config from '../../../config/susconfig.json'

test('Component -- RadioRange', () => {
	const component = renderer.create(<RadioRange setSurvey={jest.fn()} range={config.range} id={1} context={"example"} survey={[]} />)
	let tree = component.toJSON()
	expect(tree).toMatchSnapshot()
})