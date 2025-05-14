/** @type { import('@storybook/react').Preview } */
import { MemoryRouter } from 'react-router-dom';
import '../src/index.css';
import { RecoilRoot } from 'recoil';
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
      return (
        <MemoryRouter initialEntries={['/']}>
          <RecoilRoot>
            <Story />
          </RecoilRoot>
        </MemoryRouter>
      );
    }
  ]
};

export default preview;