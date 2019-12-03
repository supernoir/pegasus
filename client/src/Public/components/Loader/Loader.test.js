import React from 'react'
import renderer from 'react-test-renderer'
import Loader from './index'

test('Component -- Loader', () => {
	const component = renderer.create(<Loader />)
	let tree = component.toJSON()
	expect(tree).toMatchSnapshot()
})
