import axios from 'axios';

const post = data => axios.post('/checkout', data);

export default post;
