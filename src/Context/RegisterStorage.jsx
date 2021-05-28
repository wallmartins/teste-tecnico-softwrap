import React from 'react';
import PropTypes from 'prop-types';
import { listAllStates } from '../services/firebase/States';

export const RegisterContext = React.createContext();

export const RegisterStorage = ({ children }) => {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [states, setStates] = React.useState([]);
  React.useEffect(() => {
    try {
      setError(null);

      const getAllState = async () => {
        const response = await listAllStates();
        const statesList = response.map((state) => state.name);
        const allStates = statesList.sort();
        setStates(allStates);
      };
      getAllState();
      setLoading(false);
    } catch (err) {
      setError(`Não foi possível possível pegar os estados ${err}`);
    } finally {
      setError(null);
      setLoading(false);
    }
  }, []);

  return <RegisterContext.Provider value={{ states, loading, error }}>{children}</RegisterContext.Provider>;
};

export const withRegisterContext = (WrappedComponent) => (props) =>
  (
    <RegisterStorage>
      <WrappedComponent {...props} />
    </RegisterStorage>
  );

RegisterStorage.propTypes = {
  children: PropTypes.node.isRequired,
};
