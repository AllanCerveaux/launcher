import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/auth'

const mutations = {
	[AUTH_REQUEST]: (state) => {
		state.status = 'loading'
	},

	[AUTH_SUCCESS]: (state, user) => {
		state.status = 'sucess'
		state.user = user
	},

	[AUTH_ERROR]: (state) => {
		state.status = 'error'
	},
	
  [AUTH_LOGOUT]: (state) => {
    state.token = ''
  }
}

export default mutations;