import React from 'react'
import renderer from 'react-test-renderer'
import Survey from './index'

test('Component -- Survey', () => {
	const component = renderer.create(<Survey />)
	let tree = component.toJSON()
	expect(tree).toMatchSnapshot()
})
