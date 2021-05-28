import { useContext, useState } from 'react';
import { RegisterContext, withRegisterContext } from '../../Context/RegisterStorage';
import { createUser } from '../../services/firebase/User';

const RegisterUser = () => {
  const { states, loading, error } = useContext(RegisterContext);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value,
    });
  };

  console.log(formData);

  function formSubmit(event) {
    event.preventDefault();
    createUser(formData);
  }

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;
  if (!states) return false;

  return (
    <div className="container mx-auto my-52">
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="px-8 md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-bold leading-6 text-gray-900">Informações Pessoais</h3>
            <p className="mt-1 text-sm text-gray-500">Adicione aqui as informações da nova pessoa.</p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="#" onSubmit={formSubmit} method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Nome
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                      Idade
                    </label>
                    <input
                      type="number"
                      name="age"
                      id="age"
                      autoComplete="age"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700">
                      Estado Civil
                    </label>
                    <select
                      id="maritalStatus"
                      name="marital_status"
                      autoComplete="maritalStatus"
                      className="mt-1 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={handleChange}
                      placeholder="Selecione o seu estado civil"
                    >
                      <option>Selecione o seu estado civil</option>
                      <option>Solteiro(a)</option>
                      <option>Casado(a)</option>
                      <option>Separado(a)</option>
                      <option>Divorciado(a)</option>
                      <option>Viuvo(a)</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="document" className="block text-sm font-medium text-gray-700">
                      CPF
                    </label>
                    <input
                      type="text"
                      name="document"
                      id="document"
                      autoComplete="document"
                      className="mt-1 w-full focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                      Cidade
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                      Estado
                    </label>
                    <select
                      id="state"
                      name="state"
                      autoComplete="state"
                      className="mt-1 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      onChange={handleChange}
                    >
                      <option>Selecione o seu estado</option>
                      {states.map((state) => (
                        <option key={state}>{state}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
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
  );
};
export default withRegisterContext(RegisterUser);
