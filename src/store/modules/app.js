import { set, toggle } from "@/util/vuex";
import moment from 'moment'
import APIService from '@/apiService.js';

const API = new APIService();

const state = {
  dateWeight: null,
  checkoutStatus: null,
  showDrawer: null,
  weightofWeek: [],
  dataTempPulse: null,
  diets: [],
  measureData: null,
  allMeasures: [],
  weeklySummary: []
}

// getters
const getters = {
  getCheckoutStatus: state => state.checkoutStatus,
  getDataWeight: state => state.dataWeight,
  getWeightofWeek: state => state.weightofWeek,
  getDataTempPulse: state => state.dataTempPulse,
  getDataDiets: state => state.diets,
  getDataAllMeasures: state => state.allMeasures,
  getDataMeasure: state => state.measureData,
  getDataTodayDiet: state => state.todayDiet,
  getDataFoods: state => state.foods,
  getWeeklySummary: state => state.weeklySummary
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
}

// mutations
const mutations = {
  setDrawer: set("showDrawer"),
  setImage: set("image"),
  setColor: set("color"),
  setAllMeasures: set('allMeasures'),
  setDateWeight: (state, weightData) => {
    let tempArray = Object.assign([], state.weightofWeek)
    tempArray.push(weightData)
    state.weightofWeek = Object.assign([], tempArray)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
