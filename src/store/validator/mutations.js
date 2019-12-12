import { CREDENTIAL_VALIDATE, CREDENTIAL_ERROR } from '../actions/validator';

const mutations = {
	[CREDENTIAL_VALIDATE]: (state, valid) => {
		return state.valid = valid
	},
	[CREDENTIAL_ERROR]: (state, error) => {
		return state.error = error;
	}
}

export default mutations