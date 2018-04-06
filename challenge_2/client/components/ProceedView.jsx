import React from 'react';

const ProceedView = ({ id, activate, name }) => (
  <div
    id={id}
    className="button is-primary"
    onClick={e => activate(e)}
  >
    {name}
  </div>
);

export default ProceedView;
