import { useContext } from 'react';
import { RegisterContext, withRegisterContext } from '../../Context/RegisterStorage';
import TableUsers from '../Table/TableUsers';

const ListUsers = () => {
  const { users, loading, error } = useContext(RegisterContext);

  if (loading) return <div>Carregando a requisição da API...</div>;
  if (error) return <div>{error}</div>;
  if (!users) return false;

  return (
    <div className="container mx-auto my-52">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 lg:px-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <TableUsers users={users} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRegisterContext(ListUsers);
