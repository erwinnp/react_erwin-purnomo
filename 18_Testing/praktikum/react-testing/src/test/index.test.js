import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

jest.mock('react-dom', () => ({ render: jest.fn() }));

describe('index.js', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    div.id = 'root';
    document.body.appendChild(div);

    require('../index.js');
    // global.document.getElementById = (id) => id === 'root';
    expect(ReactDOM.render).toHaveBeenCalledWith(<App />, div);
  });
});
