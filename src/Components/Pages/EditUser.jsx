import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { RegisterContext, withRegisterContext } from '../../Context/RegisterStorage';
import { deleteUser, getUser, updateUser } from '../../Services/Firebase/User';
import ModalForm from '../Form/ModalForm';

const EditUser = () => {
  const { states, loading, error } = useContext(RegisterContext);
  const { maritalStatus } = useContext(RegisterContext);
  const [userData, setUserData] = useState([]);
  const [formData, setFormData] = useState({});
  const [formSent, setFormSent] = useState('');
  const { id } = useParams();

  const handleUserDataChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const getDataUser = async () => {
      const response = await getUser(id);
      setUserData(response);
    };
    getDataUser();
  }, []);

  function editFormSubmit(e) {
    e.preventDefault();
    setFormSent('alterado');
    updateUser(id, formData);
  }

  function deleteUserData(e) {
    e.preventDefault();
    setFormSent('excluído');
    const timer = setTimeout(() => {
      deleteUser(id);
    }, 1000);
    return () => clearTimeout(timer);
  }

  if (loading) return <div>Carregando a requisição da API...</div>;
  if (error) throw new Error('Os dados não puderão ser carregados no momento');
  if (!states) return false;

  return (
    <>
      <ModalForm errors={[]} formSent={formSent} />
      <div className="container mx-auto lg:my-52">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="lg:px-8 md:col-span-1">
            <div className="px-4 sm:px-0 pt-5 lg:pt-0">
              <h3 className="text-lg font-bold leading-6 text-gray-900">Informações Pessoais</h3>
              <p className="mt-1 text-sm text-gray-500">Altere aqui as informações da pessoa.</p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2 pb-7 lg:pb-0">
            <form action="#" onSubmit={editFormSubmit} method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-4">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Nome
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        placeholder={userData.name}
                        onChange={handleUserDataChange}
                      />
                    </div>

                    <div className="col-span-2">
                      <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                        Idade
                      </label>
                      <input
                        type="number"
                        name="age"
                        id="age"
                        autoComplete="age"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        placeholder={userData.age}
                        onChange={handleUserDataChange}
                      />
                    </div>

                    <div className="col-span-3">
                      <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700">
                        Estado Civil
                      </label>
                      <select
                        id="maritalStatus"
                        name="marital_status"
                        autoComplete="maritalStatus"
                        className="mt-1 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={handleUserDataChange}
                      >
                        {maritalStatus
                          .filter((stats) => stats === userData.marital_status)
                          .map((stats) => (
                            <option key={stats}>{stats}</option>
                          ))}
                        {maritalStatus
                          .filter((stats) => stats !== userData.marital_status)
                          .map((stats) => (
                            <option key={stats}>{stats}</option>
                          ))}
                      </select>
                    </div>

                    <div className="col-span-3">
                      <label htmlFor="document" className="block text-sm font-medium text-gray-700">
                        CPF
                      </label>
                      <input
                        type="text"
                        name="document"
                        id="document"
                        autoComplete="document"
                        className="mt-1 w-full focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
                        placeholder={userData.document}
                        onChange={handleUserDataChange}
                      />
                    </div>

                    <div className="col-span-3">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                        Cidade
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        placeholder={userData.city}
                        onChange={handleUserDataChange}
                      />
                    </div>

                    <div className="col-span-3">
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                        Estado
                      </label>
                      <select
                        id="state"
                        name="state"
                        autoComplete="state"
                        className="mt-1 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={handleUserDataChange}
                      >
                        {states
                          .filter((state) => state === userData.state)
                          .map((state) => (
                            <option key={state}>{state}</option>
                          ))}
                        {states
                          .filter((state) => state !== userData.state)
                          .map((state) => (
                            <option key={state}>{state}</option>
                          ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 mr-3.5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={deleteUserData}
                  >
                    Excluir Pessoa
                  </button>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Cadastrar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default withRegisterContext(EditUser);
