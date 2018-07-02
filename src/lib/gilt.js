import axios from 'axios';

const handleRequest = ({ method, endpoint, data }) => {
  const params = {
    method: method || 'post',
    url: `https://api.gilt.com/v1/${endpoint}.json?apikey=${process.env.GILT_KEY}`,
    data: data || null
  };
  return axios(params)
    .then(res => ({ data: res.data }))
    .catch(err => ({ error: err.response.data }));
};

export default class Gilt {
  static upcomingSales() {
    return handleRequest({
      method: 'get',
      endpoint: 'sales/upcoming'
    });
  }
};
