import React from 'react';
import ProceedView from './ProceedView';

const AccountView = ({ updateField, activate }) => (
  <div className="account-container">
    <div className="field">
      <div className="control has-icons-left">
        <input className="input is-primary is-medium is-rounded" id="name" type="text" placeholder="Name" onChange={e => updateField(e)} />
        <span className="icon is-small is-left">
          <i className="fas fa-user" />
        </span>
      </div>
    </div>
    <div className="field">
      <div className="control has-icons-left">
        <input className="input is-primary is-medium is-rounded" id="email" type="email" placeholder="Email" onChange={e => updateField(e)} />
        <span className="icon is-small is-left">
          <i className="fas fa-envelope" />
        </span>
      </div>
    </div>
    <div className="field">
      <div className="control has-icons-left">
        <input className="input is-primary is-medium is-rounded" id="password" type="password" placeholder="Password" onChange={e => updateField(e)} />
        <span className="icon is-small is-left">
          <i className="fas fa-key" />
        </span>
      </div>
    </div>
    <ProceedView id="form2" name="NEXT" activate={activate} />
  </div>
);

export default AccountView;
