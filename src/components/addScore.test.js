import React from "react";
import AddScore from "./addScore"
import { addDoc} from "firebase/firestore";
import { render, fireEvent, screen } from "@testing-library/react";

jest.mock('react-router-dom', () => ({
  // Link: jest.fn((x) => <div data-testid="submitBtn">{x.children}</div>),
  Link: (x) => <div>{x.children}</div>,
  Route: ({ children, path }) => children({ match: path === '/somewhere' })
}))

jest.mock('firebase/firestore', () => ({
  collection: jest.fn((x,y) => y),
  addDoc: jest.fn((x,y) => ({then: jest.fn().mockResolvedValue('user_object'), catch: jest.fn().mockResolvedValue('user_object')})
)}))

jest.mock('../lib/firebase', () => ({
  db: jest.fn()
  }))

test("do fields exist", () => {
    render(<AddScore/>);

    const fName = screen.getByTestId("firstName");
    const lName = screen.getByTestId("lastName");
    const score = screen.getByTestId("score");
    const submitBtn = screen.getByTestId("submitBtn");

    expect(fName).toBeTruthy();
    expect(lName).toBeTruthy();
    expect(score).toBeTruthy();
    expect(submitBtn).toBeTruthy();
});

test("Sends data to firebase", () => {
  render(<AddScore/>);

  const fName = screen.getByTestId("firstName");
  const lName = screen.getByTestId("lastName");
  const score = screen.getByTestId("score");
  const submitBtn = screen.getByTestId("submitBtn");

  fireEvent.change(fName, {target: {value: 'C'}})
  fireEvent.change(lName, {target: {value: 'Man'}})
  fireEvent.change(score, {target: {value: 99}})

  fireEvent.click(submitBtn);

  expect(addDoc).toHaveBeenCalledWith(undefined, {"firstName": "C", "lastName": "Man", "score": "99"})

});