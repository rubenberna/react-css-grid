import axios from 'axios'
const key = process.env.REACT_APP_UNSPLASH_KEY

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${key}`
  }
});
