import React from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Auxilliary/Auxilliary";
import useHttpErrorHandler from '../../hooks/http-error-handler';

const withErroHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, clearError] = useHttpErrorHandler(axios);

    return (
      <Aux>
        <Modal show={error} modalClosed={clearError}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Aux>
    );
  };
};

export default withErroHandler;