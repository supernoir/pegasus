import React from 'react'
import renderer from 'react-test-renderer'
import Success from './index'

test('Component -- Success', () => {
	const component = renderer.create(<Success />)
	let tree = component.toJSON()
	expect(tree).toMatchSnapshot()
})
