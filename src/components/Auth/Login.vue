<template>
	<section>
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
	</section>
</template>

<script>
	import { AUTH_REQUEST } from '@/store/actions/auth';

	export default {
		name:'login',
		data(){
			return {
				email:'admin@admin.com',
				password:'password',
				error : {
					code: null,
					message: ''
				}
			}
		},
		methods: {
			sendLogin(e){
				e.preventDefault();
				const { email, password } = this;

				this.$store.dispatch(AUTH_REQUEST, {email, password})
				.then(() => {
					this.$router.push('/');
				})
				.catch(err => {
					console.log(err.message);
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>