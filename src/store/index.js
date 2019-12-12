import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutation } from 'vuexfire' 

// modules
import auth from './auth'
import validator from './validator'

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
		auth,
		validator
	}
})
