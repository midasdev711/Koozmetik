import { set, toggle } from "@/util/vuex";
import APIService from '@/apiService.js';

const API = new APIService()

const state = {
  
}

// getters
const getters = {
  // getIsLogined: state => state.isLogined,
}

// actions
const actions = {
  createNewUser: ({ commit }, data) => {
    var headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      'Accept': 'application/json'
    }
    return API.post('users/new/', data, headers).then(response => {
      if (response.access_token) {
        localStorage.setItem("koozmetikToken", response.access_token);
      }
      // commit data
      return response;
    }).catch(e => {
      return e;
    });
  }
}

// mutations
const mutations = {
  // setDrawer: set("showDrawer"),
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
