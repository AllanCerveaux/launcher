const state = {
	user: JSON.parse(localStorage.getItem('user')) || '',
	status: ''
}

export default state;