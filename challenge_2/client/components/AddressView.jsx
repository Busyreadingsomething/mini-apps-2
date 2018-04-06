import React from 'react';
import ProceedView from './ProceedView';

const AddressView = ({ updateField, activate }) => (
  <div className="address-container">
    <div className="field">
      <div className="control has-icons-left">
        <input className="input is-medium is-primary is-rounded" id="line1" type="text" placeholder="Line 1" onChange={e => updateField(e)} />
        <span className="icon is-small is-left">
          <i className="fas fa-address-book" />
        </span>
      </div>
    </div>
    <div className="field">
      <div className="control has-icons-left">
        <input className="input is-medium is-primary is-rounded" id="line2" type="text" placeholder="Line 2" onChange={e => updateField(e)} />
        <span className="icon is-small is-left">
          <i className="fas fa-address-book" />
        </span>
      </div>
    </div>
    <div className="field">
      <div className="control has-icons-left">
        <input className="input is-medium is-primary is-rounded" id="city" type="text" placeholder="City" onChange={e => updateField(e)} />
        <span className="icon is-small is-left">
          <i className="fas fa-building" />
        </span>
      </div>
    </div>
    <div className="field">
      <div className="control has-icons-left">
        <input className="input is-medium is-primary is-rounded" id="state" type="text" placeholder="State" onChange={e => updateField(e)} />
        <span className="icon is-small is-left">
          <i className="fas fa-map" />
        </span>
      </div>
    </div>
    <div className="field">
      <div className="control has-icons-left">
        <input className="input is-medium is-primary is-rounded" id="zip" type="number" placeholder="Zip" onChange={e => updateField(e)} />
        <span className="icon is-small is-left">
          <i className="fas fa-hashtag" />
        </span>
      </div>
    </div>
    <div className="field">
      <div className="control has-icons-left">
        <input className="input is-medium is-primary is-rounded" id="phone" type="tel" placeholder="Phone" onChange={e => updateField(e)} />
        <span className="icon is-small is-left">
          <i className="fas fa-mobile-alt" />
        </span>
      </div>
    </div>
    <ProceedView id="form3" name="NEXT" activate={activate} />
  </div>
);

export default AddressView;
