import React from 'react';
import ItemDetail from './itemDetail';
import renderer from 'react-test-renderer';

test('ItemDetail renders correctly', ()=>{
  const component = renderer.create(<ItemDetail item={{
    id:1,
    title:'abc'
  }} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})