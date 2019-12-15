import { CHANGE_SIDENAV_STATUS } from '../actions/animations'

const mutation = {
	[CHANGE_SIDENAV_STATUS]: (state) => state.sidenavIsOpen = !state.sidenavIsOpen
}

export default mutation