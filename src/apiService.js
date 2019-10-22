import axios from 'axios';
import router from '@/router';

const API_URL = 'https://koozmetik.beauty-insights.com/api/';

export default class APIService {

  getStaticFiles(url) {
    return axios.get(url, {})
    .then(response => {
      return response.data;
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
      });
  }

  patch(sub_url, content, headers = {}) {
    // let token = localStorage.getItem("koozmetikToken");

    let url = `${API_URL}` + sub_url;
    return axios.patch(url, content, {
        headers: {
          ...headers,
        }
      })
      .then(response => {
        return response.data;
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
      });
  }

  customPost(url, content, headers = {}) {
    return axios.post(url, content, {
        headers: {
          ...headers,
        }
      })
      .then(response => {
        return response.data;
      });
  }

  customGet(url, headers = {}) {
    return axios.get(url, {
        headers: {
          ...headers,
        }
      })
      .then(response => {
        return response.data;
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
      });
  }
};
