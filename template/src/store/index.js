import Vue from 'vue'{{#if_eq lintConfig "airbnb-base"}};{{/if_eq}}
import Vuex from 'vuex'{{#if_eq lintConfig "airbnb-base"}};{{/if_eq}}

Vue.use(Vuex){{#if_eq lintConfig "airbnb-base"}};{{/if_eq}}

const state = {

}{{#if_eq lintConfig "airbnb-base"}};{{/if_eq}}

const mutations = {

}{{#if_eq lintConfig "airbnb-base"}};{{/if_eq}}

export default new Vuex.Store({
  state,
  mutations
}){{#if_eq lintConfig "airbnb-base"}};{{/if_eq}}
