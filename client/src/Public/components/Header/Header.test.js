import React from 'react'
import renderer from 'react-test-renderer'
import {Header} from '.'

test('Component -- Header', () => {
	const component = renderer.create(<Header />)
	let tree = component.toJSON()
	expect(tree).toMatchSnapshot()
})
