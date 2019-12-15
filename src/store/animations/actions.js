import { TOGGLE_SIDENAV, CHANGE_SIDENAV_STATUS } from '../actions/animations'

const actions = {
	[TOGGLE_SIDENAV]: ({commit}) => {
		return new Promise((resolve) => {
			commit(CHANGE_SIDENAV_STATUS)
			resolve()
		})
	}
}

export default actions