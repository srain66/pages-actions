import { queryClient } from '@/utils/query-client';
import { render } from '@testing-library/react';
import { QueryClientProvider } from 'react-query';
import UserBox from '.';

jest.mock('@/config');

describe('UserBox', () => {
  it('rendering', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <UserBox />
      </QueryClientProvider>,
    );
  });
});
