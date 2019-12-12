const getters = {
	isValidate: state => {
		return state.valid
	},
	isError: state => {
		return state.error
	}
}

export default getters