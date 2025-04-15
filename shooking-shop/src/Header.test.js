import { render, screen } from "@testing-library/react";
import Header from "./Header"

test("renders Header", () => {
  render(<Header />);
  const countElement = screen.getByText("3");
  expect(countElement).toBeInTheDocument();
})