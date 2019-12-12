import firebase from 'firebase'
import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT, AUTH_CHECK } from '../actions/auth'
import { USER_REQUEST } from '../actions/user'

const actions = {
	[AUTH_REQUEST]: ({commit, dispatch}, user) => {
		return new Promise((resolve, reject) => {
			commit(AUTH_REQUEST)
			firebase.auth().signInWithEmailAndPassword(user.email, user.password)
			.then(res => {
				const { displayName, photoURL, email, refreshToken } = res.user 

				localStorage.setItem('user', JSON.stringify({displayName, photoURL, email, refreshToken}))
				commit(AUTH_SUCCESS, { displayName, photoURL, email, refreshToken })

				dispatch(USER_REQUEST)
				resolve(res)
			})
			.catch(err => {
				commit(AUTH_ERROR, err)
				localStorage.removeItem('user-token')
				reject(err)
			})
		})
	},
	[AUTH_LOGOUT]: ({commit}) => {
		return new Promise((resolve) => {
			commit(AUTH_LOGOUT)
			localStorage.removeItem('user') 
			resolve()
		})
	},
	[AUTH_CHECK]: ({commit, dispatch}) => {
		return new Promise((resolve) => {
			if(firebase.auth().currentUser){
				const { displayName, photoURL, email, refreshToken } = firebase.auth().currentUser

				localStorage.setItem('user', JSON.stringify({displayName, photoURL, email, refreshToken}))
				commit(AUTH_SUCCESS, {displayName, photoURL, email, refreshToken })
				resolve()
			}else{
				dispatch(AUTH_LOGOUT);
			}
		})
	}
}

export default actions