import moment from 'moment';

const createDateLabels = exchanges =>
  exchanges.reduceRight((acc, crypt) => {
    const date = moment(crypt.time_close).format('YYYY MM DD');
    acc.push(date);
    return acc;
  }, []);

const createExchangePoints = exchanges =>
  exchanges.reduceRight((acc, crypt) => {
    acc.push(crypt.price_close);
    return acc;
  }, []);

const chartGen = (coin, exchanges) => ({
  labels: createDateLabels(exchanges),
  datasets: [{
    label: coin,
    data: createExchangePoints(exchanges),
    backgroundColor: [
      // 'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
    ],
    borderColor: [
      // 'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
    ],
    borderWidth: 1,
  }],
});

export default chartGen;
