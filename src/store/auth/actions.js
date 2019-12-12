import firebase from 'firebase'
import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT, AUTH_CHECK } from '../actions/auth'
import { USER_REQUEST } from '../actions/user'

const actions = {
	[AUTH_REQUEST]: ({commit, dispatch}, user) => {
		return new Promise((resolve, reject) => {
			commit(AUTH_REQUEST)
			firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
			.then(() => {
				firebase.auth().signInWithEmailAndPassword(user.email, user.password)
				.then(res => {
					const { displayName, photoURL, email, refreshToken } = res.user
					commit(AUTH_SUCCESS, { displayName, photoURL, email, refreshToken })

					dispatch(USER_REQUEST)
					resolve(res)
				})
				.catch(err => {
					commit(AUTH_ERROR, err)
					sessionStorage.removeItem(process.env.VUE_APP_FIREBASE_API_KEY)
					reject(err)
				})
			})
			.catch(err => reject(err));
		})
	},
	[AUTH_LOGOUT]: ({commit}) => {
		return new Promise((resolve, reject) => {
			commit(AUTH_LOGOUT)
			firebase.auth().signOut()
				.then(() => sessionStorage.removeItem(process.env.VUE_APP_FIREBASE_API_KEY))
				.catch(err => (commit(AUTH_ERROR, err), reject(err)))
			resolve()
		})
	},
	[AUTH_CHECK]: ({commit}) => {
		return new Promise((resolve, reject) => {
			firebase.auth().onAuthStateChanged(function(user) {
				if (user) {
					commit(AUTH_SUCCESS, user)
					resolve(user);
				}
				else {
					reject();
				}
			})
		})
	}
}

export default actions