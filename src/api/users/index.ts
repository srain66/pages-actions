import { useQuery, UseQueryResult } from 'react-query';
import axios from 'axios';

interface UserType {
  name: string;
}

export const getUsers = async (id: string): Promise<UserType> => {
  try {
    const { data } = await axios.get(
      //   `${import.meta.env.VITE_API_URL}/users/${id}`
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    return data;
  } catch (err: any) {
    throw new Error(err.response.status);
  }
};

export const useGetUsersData = (id: string): UseQueryResult<UserType> => {
  return useQuery<UserType, unknown>('user', async () => await getUsers(id));
};
