import React from 'react';
import Renderer from 'react-test-renderer';
import App from './App';

it('renders without crashing', () => {
  const rendered = Renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});
