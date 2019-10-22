import axios from 'axios';
import router from '@/router';

const API_URL = 'https://koozmetik.beauty-insights.com/api/';

export default class APIService {

  getStaticFiles(url) {
    return axios.get(url, {})
    .then(response => {
      return response.data;
    })
    .catch(e => {
      return e;
    });
  }
  
  get(sub_url, headers = {}) {
    // let token = localStorage.getItem("koozmetikToken");

    let url = `${API_URL}` + sub_url;
    return axios.get(url, {
        headers: {
          ...headers,
          // Authorization: "Bearer " + token
        }
      })
      .then(response => {
        return response.data;
      })
      .catch(e => {
        if (e.response.status == 401) {
          // Handle unauthorized error
        }
        return e;
      });
  }

  post(sub_url, content, headers = {}) {
    // let token = localStorage.getItem("koozmetikToken");

    let url = `${API_URL}` + sub_url;
    return axios.post(url, content, {
        headers: {
          ...headers,
        }
      })
      .then(response => {
        return response.data;
      })
      .catch(e => {
        if (e.response.status == 401) {
          // Handle unauthorized error
        }
        return e;
      });
  }

  delete(sub_url, headers = {}) {
    // let token = localStorage.getItem("koozmetikToken");

    let url = `${API_URL}` + sub_url;
    return axios.delete(url, {
        headers: {
          ...headers,
          // Authorization: "Bearer " + token,
        }
      })
      .then(response => {
        return response.data;
      })
      .catch(e => {
        if (e.response.status == 401) {
          // Handle unauthorized error
        }
        return e;
      });
  }
};
