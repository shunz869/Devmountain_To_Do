import React from 'react';
import ItemList from './itemList';
import renderer from 'react-test-renderer';

test('ItemList renders correctly', ()=>{
  const component = renderer.create(<ItemList items={[{
    id:1,
    title:'abc'
  }]} />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})