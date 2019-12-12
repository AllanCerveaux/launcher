const getters = {
	isAuthenticated: state => {
		return state.user
	},
	authStatus: state => {
		return state.status
	}
}

export default getters;