<template>
	<section class="auth-wrapper">
		<div class="login">
			<h1>Connection</h1>
			<form @submit="sendLogin" class="login-form">
				<div class="form-field">
					<label class="field" for="">Email</label>
					<input class="input" type="email" v-model="email" placeholder="john@doe.com">
				</div>
				<div class="form-field">
					<label class="field" for="">Password</label>
					<input class="input" type="password" v-model="password">
				</div>
				<div class="form-field">
					<button>Send</button>
				</div>
			</form>
			<h2>Or <router-link to="#">Register</router-link></h2>
		</div>
		<hr>
		<div class="login-social">
			<h3>Or Not ! Go to <router-link to="#">Guest</router-link> </h3>
			<p>I do not need to know who you are...</p>
			<p>I just want you to have fun!</p>
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
				error: null
			}
		},
		methods: {
			...mapActions([
				VALIDATOR_SIGNIN,
				AUTH_REQUEST
			]),
			sendLogin(e){
				e.preventDefault();
				const { email, password } = this;
				this.VALIDATOR_SIGNIN({ email, password })
				.then(() => {
					if(this.isValidate){
						this.AUTH_REQUEST({email, password})
						.then(() => {
							this.$router.push('/');
						})
						.catch(err => {
							console.log(err.message);
						})
					}else {
						const {name, message} = this.isError;
						this.error = {name, message};
					}
				})
			}
		},
		computed: {
			...mapGetters([
				'isValidate',
				'isError'
			]),
		}
	}
</script>

<style lang="scss" scoped>
.auth-wrapper {
	color:#FFF;
	background-color: rgba(33,33,33, .6);
	display: flex;
	flex-direction: column;
	padding: 2em 2em 1.8em 2em;
	margin-left: 30%;
	a {
		color: #FF5722;
		&:hover{
			color:#E64A19;
		}
	}
	hr {
		height: .1em;
		width: 100%;
		background-color: #DEDEDE;
		border: none;
	}
}
.login {
	flex: 1;
}
.login-social {
	flex: 1;
}
</style>