import axios from 'axios';

const url = import.meta.env.VITE_DATABASE_URL;

const db = axios.create({
  baseURL: url,
});

export default db;