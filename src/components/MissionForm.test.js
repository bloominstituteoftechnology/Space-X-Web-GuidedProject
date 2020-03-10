import React from "react";
import { render } from "@testing-library/react";
import MissionForm from "./MissionForm";

test("Mission Form renders correctly", () => {
  const mockGetData = jest.fn();
  const { getByText, queryByText } = render(
    <MissionForm getData={mockGetData} isFetchingData={false} />
  );

  // test that the button is rendered, and the loading state is not
  getByText(/get data/i);
  expect(queryByText(/we are fetching data/i)).toBeNull();

  // line 12 is shorthand for this:
  // expect(getByText(/get data/i)).toBeInTheDocument();
});

test("Component trasitions to loading state when isFetchingData is true", () => {
  const mockGetData = jest.fn();
  const { getByText, queryByText, rerender } = render(
    <MissionForm getData={mockGetData} isFetchingData={false} />
  );

  // test that the button is rendered, and the loading state is not
  getByText(/get data/i);
  expect(queryByText(/we are fetching data/i)).toBeNull();

  // re-render the component becuase isFetchingData has been changed to true
  rerender(<MissionForm getData={mockGetData} isFetchingData={true} />);

  getByText(/we are fetching data/i);
  expect(queryByText(/get data/i)).toBeNull();
});

// TODO: add a test to test the transition from the loading state back to the resting state
// TODO: look through this test file and list out all the functions come from RTL, and all the functions coming from Jest
