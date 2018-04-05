import axios from 'axios';

const fetch = query => axios(`http://localhost:3000/crypto/${query}`);

export default fetch;
