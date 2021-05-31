import PropTypes from 'prop-types';

const ModalForm = ({ errors, formSent, setShowModal }) => {
  if (!errors) return null;
  const stringsRegister = ['realizado', 'alterado', 'excluído'];
  const stringExist = stringsRegister.find((state) => state === formSent);

  return (
    <>
      {!stringExist ? (
        <div className="fixed lg:absolute w-11/12 lg:w-2/5 lg:h-10 bottom-5 left-0 right-0 ml-auto mr-auto lg:mr-5 lg:top-44 text-sm">
          <nav className="px-4 py-4 lg:px-8 lg:py-4 bg-red-50 border border-solid rounded border-red-800 border-opacity-50 text-sm">
            <button
              type="button"
              className="absolute right-5 p-2 h-auto focus:outline-none"
              aria-controls="modal"
              aria-expanded="false"
              onClick={() => setShowModal(false)}
            >
              <svg
                className="hidden lg:block h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#B91C1C"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <ul>
              <li className="flex items-center mb-2 text-red-800">
                <svg
                  className="block h-4 w-4 p-1 mr-2 rounded-full bg-red-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M6 18L18 6M6 6l12 12" />
                </svg>
                Existe(m) {errors.length} erro(s) ao adicionar uma nova pessoa:
              </li>
              {errors.map((err) => {
                if (err.message.length === 0) {
                  return false;
                }

                return (
                  <li className="w-3/4 mx-auto list-disc text-red-700" key={err.message}>
                    {err.message}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      ) : (
        <div className="fixed lg:absolute w-11/12 lg:w-2/5 lg:h-10 bottom-5 left-0 right-0 ml-auto mr-auto lg:mr-5 lg:top-44">
          <span className="flex items-center px-4 py-4 lg:px-8 lg:py-4 bg-green-50 border border-solid rounded border-green-800 border-opacity-50 text-sm text-green-800">
            <button
              type="button"
              className="absolute right-1 mb-auto p-2 h-auto focus:outline-none"
              aria-controls="modal"
              aria-expanded="false"
              onClick={() => setShowModal(false)}
            >
              <svg
                className="block h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#10B981"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 p-1 bg-green-400 rounded-full mr-2"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                stroke="white"
                strokeWidth="3"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            Cadastro {formSent} com sucesso
          </span>
        </div>
      )}
    </>
  );
};

export default ModalForm;

ModalForm.propTypes = {
  errors: PropTypes.array.isRequired,
  formSent: PropTypes.string.isRequired,
  setShowModal: PropTypes.func.isRequired,
};
