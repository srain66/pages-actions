import { useGetUsersData } from '../../api/users';
import { NODE_ENV } from '@/config';

export default function UserBox() {
  const { isLoading, isError, data: user } = useGetUsersData('1');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div>
      환경: {NODE_ENV}
      <br />
      이름: {user?.name}
    </div>
  );
}
