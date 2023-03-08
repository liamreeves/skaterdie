import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Renders new trick button.", () => {
  render(<App />);
  const linkElement = screen.getByText(/new trick/i);
  expect(linkElement).toBeInTheDocument();
});

test("Shows new trick after button is clicked", () => {
  render(<App />);
  const trickButton = screen.getByText(/new trick/i);
  fireEvent.click(trickButton);
  expect(screen.getByTestId("trick"));
});
