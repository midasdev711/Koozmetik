import { set, toggle } from "@/util/vuex";
import moment from 'moment'
import APIService from '@/apiService.js';
import { globalStore } from '@/main.js'

const API = new APIService();

const state = {
  
}

// getters
const getters = {
  
}

// actions
const actions = {
  getCurrentCartData: ({ commit }, params) => {
    var headers = { 'Authorization': 'Bearer ' + localStorage.getItem("koozmetikToken") };
    return API.get('carts/current/' + params, headers).then(result => {
      // handle data
      return result;
    }).catch(err => {
      throw err;
    });
  },
  getProductCategories: ({ commit }, params) => {
    var headers = { 'Authorization': 'Bearer ' + localStorage.getItem("koozmetikToken") };
    return API.get('productcategories/' + params, headers).then(result => {
      // handle data
      return result;
    }).catch(err => {
      throw err;
    });
  },
  getProducts: ({ commit }, params) => {
    var headers = { 'Authorization': 'Bearer ' + localStorage.getItem("koozmetikToken") };
    return API.get('products/' + params, headers).then(result => {
      // handle data
      return result;
    }).catch(err => {
      throw err;
    });
  },
  getBlogDetailsList: ({ commit }, params) => {
    var headers = { 'Authorization': 'Bearer ' + localStorage.getItem("koozmetikToken") };
    return API.get('posts/?ordering=-published_on&limit=3&/' + params, headers).then(result => {
      // handle data
      return result;
    }).catch(err => {
      throw err;
    });
  },
  getNewsDetailsList: ({ commit }, params) => {
    var headers = { 'Authorization': 'Bearer ' + localStorage.getItem("koozmetikToken") };
    return API.get('posts/?ordering=-published_on&limit=3&' + params + "&categories__slug=news", headers).then(result => {
      // handle data
      return result;
    }).catch(err => {
      throw err;
    });
  },
  getStaticFiles: ({ commit }, params) => {
    return API.getStaticFiles(params).then(result => {
      // handle data
      return result;
    }).catch(err => {
      throw err;
    });
  },
  getBlogDetails: ({ commit }, params) => {
    var headers = { 'Authorization': 'Bearer ' + localStorage.getItem("koozmetikToken") };
    return API.get("posts/" + params, headers).then(result => {
      // handle data
      return result;
    }).catch(err => {
      throw err;
    });
  },
  getBlogList: ({ commit }, params) => {
    var headers = { 'Authorization': 'Bearer ' + localStorage.getItem("koozmetikToken") };
    return API.get('posts/' + params, headers).then(result => {
      // handle data
      return result;
    }).catch(err => {
      throw err;
    });
  },
  getNewsList: ({ commit }, params) => {
    var headers = { 'Authorization': 'Bearer ' + localStorage.getItem("koozmetikToken") };
    return API.get('posts/' + params + "&categories__slug=news", headers).then(result => {
      // handle data
      return result;
    }).catch(err => {
      throw err;
    });
  },
  chargeStripe: ({ commit }, data) => {
    var headers = {
      'Content-Type': "application/x-www-form-urlencoded",
      'Authorization': "Bearer "+ globalStore.StripeSecretKey  //stripe secret key
    }
    return API.customPost("https://api.stripe.com/v1/charges", data, headers).then(response => {
      // commit data
      return response;
    }).catch(e => {
      return e;
    });
  },
  getRelatedProductCategory: ({ commit }, params) => {
    var headers = { 'Authorization': 'Bearer ' + localStorage.getItem("koozmetikToken") };
    return API.customGet(params, headers).then(result => {
      // handle data
      return result;
    }).catch(err => {
      return err;
    });
  },
  saveCartData: ({ commit }, data) => {
    var headers = { 'Authorization': 'Bearer ' + localStorage.getItem("koozmetikToken") };
    return API.patch(sessionStorage.getItem("UserCart") + globalStore.LangDomain, data, headers).then(response => {
      // commit data
      return response;
    }).catch(e => {
      return e;
    });
  },
}

// mutations
const mutations = {
  // setAllMeasures: set('allMeasures'),
  // setDateWeight: (state, weightData) => {
  //   let tempArray = Object.assign([], state.weightofWeek)
  //   tempArray.push(weightData)
  //   state.weightofWeek = Object.assign([], tempArray)
  // }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
