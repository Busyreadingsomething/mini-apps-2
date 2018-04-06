import React from 'react';
import ProceedView from './ProceedView';

const CreditCardView = ({ updateField, activate}) => (
  <div className="card-container">
    <div className="field">
      <div className="control has-icons-left card-number-container">
        <input className="input is-primary is-rounded is-medium" id="creditCard" type="number" placeholder="Credit Card Number" onChange={e => updateField(e)} />
        <span className="icon is-small is-left">
          <i className="fas fa-credit-card" />
        </span>
      </div>
    </div>
    <div className="field">
      <div className="control has-icons-left card-exp-container">
        <input className="input is-primary is-rounded is-medium" id="expDate" type="text" placeholder="EXP Date" onChange={e => updateField(e)} />
        <span className="icon is-small is-left">
          <i className="fas fa-credit-card" />
        </span>
      </div>
    </div>
    <div className="field">
      <div className="control has-icons-left card-CVV-container">
        <input className="input is-primary is-rounded is-medium" id="cvv" type="number" placeholder="CVV" onChange={e => updateField(e)} />
        <span className="icon is-small is-left">
          <i className="far fa-credit-card" />
        </span>
      </div>
    </div>
    <div className="field">
      <div className="control has-icons-left card-zip-container">
        <input className="input is-primary is-rounded is-medium" id="billZip" type="number" placeholder="Billing Zip" onChange={e => updateField(e)} />
        <span className="icon is-small is-left">
          <i className="fas fa-hashtag" />
        </span>
      </div>
    </div>
    <ProceedView id="summary" name="NEXT" activate={activate} />
  </div>
);

export default CreditCardView;
