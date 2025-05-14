/** @type { import('@storybook/react').Preview } */
import { MemoryRouter } from 'react-router-dom';
import '../src/index.css';
import { RecoilRoot } from 'recoil';
import { ShookingContext } from '../src/App';
import { handlers } from '../src/mocks/handlers';
import { initialize, mswDecorator } from 'msw-storybook-addon';

// MSW 초기화
initialize();

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    msw: {
      handlers
    }
  },
  decorators: [
    mswDecorator,
    (Story) => {
      const mockContextValue = {
        productContents: [
          {id: 1, image: "temp_shoes.jpeg", brand: "브랜드A", description: "곰돌이 아기신발 운동화 아동 스니커즈", price: 38000, inCart: false},
          {id: 2, image: "temp_shoes2.jpeg", brand: "브랜드B", description: "편안하고 착용감이 좋은 신발", price: 33000, inCart: true},
          {id: 3, image: "temp_shoes3.jpeg", brand: "브랜드C", description: "편리한 건강신발 간호신발 효도화", price: 27000, inCart: true},
        ]
      };
      return (
        <MemoryRouter initialEntries={['/']}>
          <ShookingContext.Provider value={mockContextValue}>
            <RecoilRoot>
              <Story />
            </RecoilRoot>
          </ShookingContext.Provider>
        </MemoryRouter>
      );
    }
  ]
};

export default preview;