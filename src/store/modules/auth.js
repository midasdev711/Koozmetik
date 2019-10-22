import { set, toggle } from "@/util/vuex";
import APIService from '@/apiService.js';

const API = new APIService()

const state = {
  isLogined: false,
  isAdmin: false,
  userProfile: {
    id: "",
    email: "",
    userRoles: []
  }
}

// getters
const getters = {
  getIsLogined: state => state.isLogined,
  getIsAdmin: state => state.isAdmin,
  getDataUserProfile: state => state.userProfile,
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
  },
  getMe: ({ commit }) => {
    if(!localStorage.getItem("token")){
      return;
    }
    var headers = {accept: 'application/json'};
    return API.get('api/users/current', headers).then(result => {
      var data = result.data;
      var roles = data.userRoles;
      var isAdmin = (roles && roles.length > 0) ? (roles.indexOf("admin") > -1) : false;
      commit("setLogined", true);
      commit("setAdmin", isAdmin);
      commit("setUserProfile", data)
    }).catch(e => {
      localStorage.removeItem('token');
      console.log(e);
      // commit("setLogined", false);
      // commit("setAdmin", false);
    });
  },
  login: ({ commit }, data) => {
    return API.post('api/token', data).then(result => {
      var status;
      if (result.data == null) {
        status = {status: false, error: result.errors[0].errorMessage}; 
      }
      else {
        var token = result.data.access_token;
        localStorage.setItem("token", token);
        status = {status: true}
        commit("setUserProfile", result.data.user);
        commit("setLogined", true);
        commit("setAdmin", false);
      }
      return status;
    }).catch(e => {
      console.log(e);
      return e;
      // commit("setLogined", false);
      // commit("setAdmin", false);
    });
  },
  adminLogin: ({ commit }, data) => {
    return API.post('api/users/admin/login', data).then(result => {
      var token = result.data.access_token;
      localStorage.setItem("token", token);
      commit("setUserProfile", result.data.user);
      commit("setLogined", true);
      commit("setAdmin", true);
    }).catch(e => {
      console.log(e);
      // commit("setLogined", false);
      // commit("setAdmin", false);
    });
  },
}

// mutations
const mutations = {
  setDrawer: set("showDrawer"),
  setImage: set("image"),
  setColor: set("color"),
  setLogined: set("isLogined"),
  setAdmin: set("isAdmin"),
  toggleDrawer: toggle("showDrawer"),
  setUserProfile: set("userProfile"),
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
