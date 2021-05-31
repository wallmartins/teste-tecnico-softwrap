import PropTypes from 'prop-types';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';

const TableUsers = ({ users }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage).map((user) => (
    <tr key={user.document}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div>
            <div className="text-sm font-medium text-gray-900">{user.name}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{user.age}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{user.marital_status}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{user.document}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{user.city}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{user.state}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href={`/edit/${user.uid}`} className="text-indigo-600 hover:text-indigo-900">
          Edit
        </a>
      </td>
    </tr>
  ));

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  if (!users) {
    return false;
  }

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Idade
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Estado Civil
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              CPF
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cidade
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Estado
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">{displayUsers}</tbody>
      </table>
      <div className="flex w-full justify-between items-center">
        <span className="pl-6 text-sm">
          Mostrando {pageNumber >= 1 ? pageNumber * usersPerPage + 1 : '1'} até{' '}
          {pagesVisited + usersPerPage <= users.length ? pagesVisited + usersPerPage : users.length} de {users.length}{' '}
          resultados
        </span>
        <ReactPaginate
          previousLabel="Anterior"
          nextLabel="Próximo"
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="flex justify-end p-4"
          previousLinkClassName="py-2 px-3 mr-3 border border-gray-300 rounded-md text-sm"
          nextLinkClassName="py-2 px-3 border border-gray-300 rounded-md text-sm"
          pageClassName="hidden"
        />
      </div>
    </div>
  );
};

export default TableUsers;

TableUsers.propTypes = {
  users: PropTypes.array.isRequired,
};
