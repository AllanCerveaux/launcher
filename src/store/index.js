import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutation } from 'vuexfire' 

import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
	},
	mutations: {
		...vuexfireMutation
	},
	actions: {
	},
	modules: {
		auth
	}
})
