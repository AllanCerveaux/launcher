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
.auth-wrapper {
	color:#FFF;
	width:100%;
	margin-left: 30%;
	padding: 1em 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	grid-area: 2 / 2 / 6 / 3;
	background-color: rgba(33,33,33, .6);
	a {
		color: #FF5722;
		&:hover{
			color:#E64A19;
		}
	}
	hr {
		height: .1em;
		width: 80%;
		background-color: #DEDEDE;
		border: none;
	}
}
.login, .login-anonymous {
	width: 80%;
}
.login {
	.login-form {
		display: flex;
		flex-direction: column;
		.form-field{
			display: flex;
			flex-direction: column;
			margin-bottom: 5%;
			&>label{
				margin-bottom: 5%;
				font-weight: bold;
			}
			&>input{
				&.error {
					border-color: #D32F2F;
				} 
				color:#FFF;
				background-color: #212121;
				padding: .5em;
				border-radius: 5px;
				border: 1px rgba(33,33,33, .5) solid;
				&:hover{
					border-color:#FFF;
				}
				&:focus{
					border-color: #FF5722;
				}
			}
			&>button{
				border: 1px rgba(33,33,33,.5) solid;
				background-color: #FF5722;
				border-radius: 5px;
				font-weight: bold;
				font-size: 1em;
				margin: 0 auto;
				padding: 1em;
				width: 70%;
				color:#FFF;
				&:disabled{
					background-color: rgba(33,33,33,.5);
					color:rgba(243,243,243,.5);
				}

				&:active{
					color: rgba(255,255,255,.5);
					background-color: #E64A19;
				}
			}
		}
	}
}
.error-message{
	background-color: #D32F2F;
	margin-bottom: .5em;
	border-radius: 5px;
	padding: .5em;
	border: 1 rgba(33,33,33,.5) solid;
}
.login-anonymous {
}
</style>