/* eslint-disable jsx-a11y/control-has-associated-label */
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterContext, withRegisterContext } from '../../Context/RegisterStorage';
import { userCreateSchema } from '../../Services/Firebase/UserSchema';
import ModalForm from '../Form/ModalForm';
import { createUser } from '../../Services/Firebase/User';

const RegisterUser = () => {
  const { states, users, maritalStatus, loading, error } = useContext(RegisterContext);
  const [formSent, setFormSent] = useState('');
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userCreateSchema),
  });

  const errorsArray = Object.values(errors);

  const submitedForm = (data, event) => {
    const equalCPF = users.filter((user) => user.document === data.document);
    if (equalCPF.length !== 0) {
      return setError('document', { type: 'string', message: 'CPF já cadastrado no sistema!' });
    }
    setFormSent('realizado');
    createUser(data);
    return event.target.reset();
  };

  if (loading) return <div>Carregando a requisição da API...</div>;
  if (error) return <div>{error}</div>;
  if (!states) return false;

  return (
    <>
      <ModalForm errors={errorsArray} formSent={formSent} />
      <div className="container mx-auto lg:my-52">
        <div className="lg:grid lg:grid-cols-3 lg:gap-6">
          <div className="lg:px-8 lg:col-span-1">
            <div className="px-4 pl-4 lg:px-0 pt-5 lg:pt-0">
              <h3 className="text-lg font-bold leading-6 text-gray-900">Informações Pessoais</h3>
              <p className="mt-1 text-sm text-gray-500">Adicione aqui as informações da nova pessoa.</p>
            </div>
          </div>
          <div className="mt-5 lg:mt-0 lg:col-span-2 pb-7 lg:pb-0">
            <form method="POST" onSubmit={handleSubmit(submitedForm)}>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="lg:grid lg:grid-cols-6 lg:gap-6">
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
                        {...register('name', { required: true })}
                      />
                    </div>

                    <div className="col-span-2 pt-2 lg:pt-0">
                      <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                        Idade
                      </label>
                      <input
                        type="number"
                        name="age"
                        id="age"
                        autoComplete="age"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        {...register('age', { required: true })}
                      />
                    </div>

                    <div className="col-span-3">
                      <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700 pt-2 lg:pt-0">
                        Estado Civil
                      </label>
                      <select
                        id="maritalStatus"
                        name="marital_status"
                        autoComplete="maritalStatus"
                        className="mt-1 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...register('marital_status', { required: true })}
                      >
                        <option hidden value="">
                          Selecione o seu estado civil
                        </option>
                        {maritalStatus.map((stats) => (
                          <option key={stats}>{stats}</option>
                        ))}
                      </select>
                    </div>

                    <div className="col-span-3">
                      <label htmlFor="document" className="block text-sm font-medium text-gray-700 pt-2 lg:pt-0">
                        CPF
                      </label>
                      <input
                        type="text"
                        name="document"
                        id="document"
                        autoComplete="document"
                        className="mt-1 w-full focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm border-gray-300 rounded-md"
                        {...register('document', { required: true })}
                      />
                    </div>

                    <div className="col-span-3">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 pt-2 lg:pt-0">
                        Cidade
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        {...register('city', { required: true })}
                      />
                    </div>

                    <div className="col-span-3">
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 pt-2 lg:pt-0">
                        Estado
                      </label>
                      <select
                        id="state"
                        name="state"
                        autoComplete="state"
                        className="mt-1 w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        {...register('state', { required: true })}
                      >
                        <option hidden value="">
                          Selecione o seu estado
                        </option>
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
    </>
  );
};
export default withRegisterContext(RegisterUser);
