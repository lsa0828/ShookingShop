import { render, screen } from "@testing-library/react";
import ProductCard from "../ProductCard";

test("renders ProductCard", () => {
  const content = {
    image: "temp_shoes.jpeg",
    brand: "브랜드A",
    description: "편안하고 착용감이 좋은 신발",
    price: "35,000원"
  };

  render(<ProductCard content={content}/>);

  expect(screen.getByText("브랜드A")).toBeInTheDocument();
  expect(screen.getByRole("img")).toHaveAttribute("src", "temp_shoes.jpeg");
  expect(screen.getByText("편안하고 착용감이 좋은 신발")).toBeInTheDocument();
  expect(screen.getByText("35,000원")).toBeInTheDocument();
});