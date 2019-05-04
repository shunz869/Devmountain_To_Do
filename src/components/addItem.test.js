import React from 'react';
import AddItem from './addItem';
import renderer from 'react-test-renderer';

test('AddItem renders correctly', ()=>{
  const component = renderer.create(<AddItem item={{
    id:1,
    title:'abc'
  }} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})