import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const title = screen.getByText("신발 상품 목록");
  expect(title).toBeInTheDocument();
});
