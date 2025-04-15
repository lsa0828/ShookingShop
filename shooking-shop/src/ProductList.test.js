import { render, screen } from "@testing-library/react"
import ProductList from "./ProduckList"

test("renders ProductList", () => {
  render(<ProductList />);
  expect(screen.getAllByRole("img").length).toBe(6);
})