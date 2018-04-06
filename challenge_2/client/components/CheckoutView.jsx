import React from 'react';
import AccountView from './AccountView';
import AddressView from './AddressView';
import CreditCardView from './CreditCardView';
import SummaryView from './SummaryView';
import ProceedView from './ProceedView';
import formatData from './clientHelpers/formatData';
import post from './clientHelpers/post';

class CheckoutView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      line1: '',
      line2: '',
      city: '',
      state: '',
      zip: null,
      phone: null,
      creditCard: '',
      expDate: null,
      cvv: null,
      billZip: null,
      start: true,
      form1: false,
      form2: false,
      form3: false,
      summary: false,
    };
  }

  updateField(e) {
    const { id, value } = e.target;
    const updateState = {};
    updateState[id] = value;
    this.setState(updateState);
  }

  updateForm(e) {
    const { id } = e.target;
    const updateState = {
      start: false,
      form1: false,
      form2: false,
      form3: false,
      summary: false,
    };
    updateState[id] = !updateState[id];
    this.setState(updateState);
  }

  sendPurchase() {
    const data = formatData(this.state);
    const setState = this.setState.bind(this);
    post(data)
      .then(() => setState({
        name: '',
        email: '',
        password: '',
        line1: '',
        line2: '',
        city: '',
        state: '',
        zip: null,
        phone: null,
        creditCard: '',
        expDate: null,
        cvv: null,
        billZip: null,
        start: true,
        form1: false,
        form2: false,
        form3: false,
        summary: false,
      }))
      .catch(e => console.log(e));
  }

  render() {
    const {
      start,
      form1,
      form2,
      form3,
      summary,
    } = this.state;

    const data = formatData(this.state);

    return (
      <div className="form-container">
        {
          start ? <ProceedView
            id="form1"
            name="CHECKOUT"
            activate={e => this.updateForm(e)}
          /> : null
        }
        {
          form1 ? <AccountView
            updateField={e => this.updateField(e)}
            activate={e => this.updateForm(e)}
          /> : null
        }
        {
          form2 ? <AddressView
            updateField={e => this.updateField(e)}
            activate={e => this.updateForm(e)}
          /> : null
        }
        {
          form3 ? <CreditCardView
            updateField={e => this.updateField(e)}
            activate={e => this.updateForm(e)}
          /> : null
        }
        {
          summary ? <SummaryView data={data} activate={() => this.sendPurchase()} /> : null
        }
      </div>
    );
  }
}

export default CheckoutView;
