import axios from 'axios';
import { getUsers } from '.';

const MOCK_USER = {
  id: 1,
  name: 'Leanne Graham',
  username: 'Bret',
  email: 'Sincere@april.biz',
  address: {
    street: 'Kulas Light',
    suite: 'Apt. 556',
    city: 'Gwenborough',
    zipcode: '92998-3874',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '1-770-736-8031 x56442',
  website: 'hildegard.org',
  company: {
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  },
};

jest.mock('axios');

describe('getUsers', () => {
  it('should return users', async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce({ data: MOCK_USER });

    const result = await getUsers('1');
    expect(result).toEqual(MOCK_USER);
  });
});
