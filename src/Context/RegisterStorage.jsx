import React from 'react';
import PropTypes from 'prop-types';

export const RegisterContext = React.createContext();

export const RegisterStorage = ({ children }) => (
  <RegisterContext.Provider value={{}}>{children}</RegisterContext.Provider>
);

export const withStreamerContext = (WrappedComponent) => (props) =>
  (
    <RegisterStorage>
      <WrappedComponent {...props} />
    </RegisterStorage>
  );

RegisterStorage.propTypes = {
  children: PropTypes.node.isRequired,
};
