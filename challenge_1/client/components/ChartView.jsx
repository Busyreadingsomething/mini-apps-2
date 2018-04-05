import React from 'react';
import { Line } from 'react-chartjs-2';
import fetch from '../axiosRequest/fetch';
import chartGen from '../clientHelpers/chartGen';

class ChartView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coin: 'BTC',
      exchanges: [],
    };
  }

  componentDidMount() {
    fetch(this.state.coin)
      .then(({ data }) => {
        this.setState({
          exchanges: data,
        });
      });
  }

  render() {
    const { coin, exchanges } = this.state;
    const data = chartGen(coin, exchanges);

    return (
      <div>
        <Line data={data} />
      </div>
    );
  }
}

export default ChartView;
