import React from 'react';
import ProceedView from './ProceedView';
import maskCardNum from './clientHelpers/maskCardNum';

const SummaryView = ({ data, activate }) => (
  <div className="summary-container">
    <h2>User</h2>
    <div className="box">
      <div className="summary-name">{data.name}</div>
      <div className="summary-email">{data.email}</div>
      <div className="summary-password">{data.password.split('').map(() => '*').join('')}</div>
    </div>
    <h2>Address</h2>
    <div className="box">
      <div className="summary-line-1">{data.line1}</div>
      <div className="summary-line-2">{data.line2}</div>
      <div className="summary-city">{data.city}</div>
      <div className="summary-state">{data.state}</div>
      <div className="summary-zip">{data.zip}</div>
      <div className="summary-phone">{data.phone}</div>
    </div>
    <h2>Payment</h2>
    <div className="box">
      <div className="summary-card-number">
        {
          maskCardNum(data.creditCard)
        }
      </div>
      <div className="summary-card-exp">{data.expDate}</div>
      <div className="summary-card-CVV">{data.cvv}</div>
      <div className="summary-card-zip">{data.billZip}</div>
    </div>
    <ProceedView id="proceed" name="PROCEED" activate={activate} />
  </div>
);

export default SummaryView;
