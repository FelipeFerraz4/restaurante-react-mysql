import axios from 'axios';

const db = axios.create({
  baseURL: 'http://localhost:8800',
});

export default db;