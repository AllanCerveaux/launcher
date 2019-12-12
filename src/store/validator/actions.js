import { VALIDATOR_SIGNUP, VALIDATOR_SIGNIN, CREDENTIAL_VALIDATE, CREDENTIAL_ERROR } from '../actions/validator';
import { signInSchema } from './schema';

const actions = {
	[VALIDATOR_SIGNIN]: ({commit},credentials) => {
		return signInSchema
			.validate(credentials)
				.then(() => commit(CREDENTIAL_VALIDATE, true))
				.catch(error => commit(CREDENTIAL_ERROR, error))
	},
	[VALIDATOR_SIGNUP]: () => {

	},
	
}

export default actions