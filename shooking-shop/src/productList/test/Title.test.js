import { render, screen } from "@testing-library/react"
import Title from "../Title"

test("renders title", () => {
  render(<Title />);
  const title = screen.getByText("신발 상품 목록");
  expect(title).toBeInTheDocument();
  const num = screen.getByText(/6/);
  expect(num).toBeInTheDocument();
})