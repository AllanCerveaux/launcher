const getters = {
	isValidate: state => {
		return state.valid
	},
	isValidatorError: state => {
		return state.error
	}
}

export default getters