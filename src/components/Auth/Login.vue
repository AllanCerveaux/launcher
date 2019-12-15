<template>
	<section class="auth-wrapper">
		<div class="login">
			<h1>Connection</h1>
			<form @submit="sendLogin" class="login-form">
				<div class="form-field">
					<label class="field" for="">Email</label>
					<input class="" :class="error.code === 'auth/user-not-found' ? 'error input' : 'input' " type="email" v-model="email" placeholder="john@doe.com">
				</div>
				<div class="form-field">
					<label class="field" for="">Password</label>
					<input :class="error.code === 'auth/wrong-password' ? 'error input' : 'input'" type="password" v-model="password">
				</div>
				<div class="form-field">
					<button :disabled="disabledButton">SIGN IN</button>
				</div>
				<span v-if="error" class="error-message">{{error.message}}</span>
			</form>
			<h2>Or <router-link to="#">Register</router-link></h2>
		</div>
		<hr>
		<div class="login-anonymous">
			<h3>Or Not ! Go to <router-link to="#">Guest</router-link> </h3>
			<p>I do not need to know who you are...</p>
			<p>Just have fun!</p>
		</div>
	</section>
</template>

<script>
	import { AUTH_REQUEST } from '@/store/actions/auth';
	import { VALIDATOR_SIGNIN } from '@/store/actions/validator';
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name:'login',
		data(){
			return {
				email:'admin@admin.com',
				password:'password',
				error: false
			}
		},
		methods: {
			...mapActions([
				VALIDATOR_SIGNIN,
				AUTH_REQUEST
			]),
			sendLogin(e){
				e.preventDefault();
				const { email, password } = this
				this.VALIDATOR_SIGNIN({ email, password })
				.then(() => {
					if(this.isValidate){
						this.AUTH_REQUEST({email, password})
						.then(() => {
							this.$router.push('/')
						})
						.catch((err) => {
							const { code, message } = err
							this.error = {...this.authStatus, code, message}
						})
					}else {
						const {name, message} = this.isError
						this.error = {name, message}
					}
				})
			}
		},
		computed: {
			...mapGetters([
        'authStatus',
        'isAuthError',
				'isValidate',
				'isValidatorError'
			]),
			disabledButton(){
				return this.password.length < 1;
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>