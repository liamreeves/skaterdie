import React from "react";
import { render, screen } from "@testing-library/react";
import { AuthContext } from "./contexts/AuthContext";
import App from "./App";

test("renders login button when user is not authenticated", () => {
  const value = { user: null }; // provide a value for user in the AuthContext
  render(
    <AuthContext.Provider value={value}>
      <App />
    </AuthContext.Provider>
  );
  const buttonElement = screen.getByRole("button", { name: /Login With Google/i });
  expect(buttonElement).toBeInTheDocument();
});

test("renders user name when user is authenticated", () => {
  const value = { user: { displayName: "John" } }; // provide a value for user in the AuthContext
  render(
    <AuthContext.Provider value={value}>
      <App />
    </AuthContext.Provider>
  );
  const textElement = screen.getByText(/Hey John/i);
  expect(textElement).toBeInTheDocument();
});
