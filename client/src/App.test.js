import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test("renders without crashing", () => {
  // const div = document.createElement("div");
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
  render(<App />);
});

it('renders page title', () => {
  const { getByText } = render(<App />);
  expect(getByText('2019 Women’s World Cup Player Searches')).toBeInTheDocument();
});

it('renders toggle dark mode buttom', () => {
  const { getByText } = render(<App />);
  expect(getByText(' Toggle Dark Mode ')).toBeInTheDocument();
});

test("has both page title and dark mode hook", () => {
  const container = render(<App />);
  console.log("container: ", container);

  //container.getByText("Lions");
  container.getByText(/2019 Women’s World Cup Player Searches/i);
  container.getByText(/ Toggle Dark Mode /i);
});

test("Section of players renders to the screen", () => {
  const container = render(<App />);
  const playerSection = container.getByTestId("playerSection")

  expect(playerSection).toBe(true)
});