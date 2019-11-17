import React from 'react'
import renderer from 'react-test-renderer'
import Scale from './index'

test('Component -- Scale', () => {
	const component = renderer.create(<Scale />)
	let tree = component.toJSON()
	expect(tree).toMatchSnapshot()
})
