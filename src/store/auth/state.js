const state = {
	user: JSON.parse(sessionStorage.getItem(process.env.VUE_APP_FIREBASE_SESSION_ITEM)) || '',
	status: ''
}

export default state;