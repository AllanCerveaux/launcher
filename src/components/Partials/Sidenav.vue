<template>
	<div @click="changeSidenavStatus" class="sidenav">
		<div class="sidenav-trigger">
			<span>{{user.displayName}}</span>
			<img :src="user.photoURL" alt="">
		</div>
		<div v-if="isOpen" class="sidenav-out">
			<div class="sidenav-user">
				<img :src="user.photoURL" alt="">
				<span>{{user.displayName}}</span>
			</div>
			<div class="sidenav-content">
				<a class="sidenav-item" @click="logout">logout</a>
				<a class="sidenav-item" href="#">Settings</a>
				<a class="sidenav-item" href="#">Report bug</a>
			</div>
		</div>	
	</div>
</template>

<script>
	import { TOGGLE_SIDENAV } from '@/store/actions/animations'
	import { AUTH_LOGOUT } from '@/store/actions/auth'
	import { mapGetters } from 'vuex'

	export default {
		props:{
			user:{
				type: Object,
				required: true
			}
		},
		methods: {
			logout(){ 
				return this.$store.dispatch(AUTH_LOGOUT)
					.then(() => this.$router.push('/login'))
			},
			changeSidenavStatus(){
				return this.$store.dispatch(TOGGLE_SIDENAV);
			}
		},
		computed:{
			...mapGetters([
				'isOpen'
			])
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../assets/modules/variables.scss';

	.sidenav {
		display: flex;
		flex-direction: column;
		cursor: pointer;
	}

	a{
		text-decoration: none;
		color: rgba($color-text-icon, .7);
	}

	.sidenav-trigger {
		display: flex;
		align-items: center;
		color: $color-text-icon;
		padding: ms(-3);
		&>img{
			width: ms(2);
			margin-left: ms(-1);
		}
		&:hover {
			background-color: lighten($dark-primary-color, 10%);
			border-radius: ms(-4);
		}
	}
	.sidenav-out{
		position: absolute;
		top:0;
		right: 0;
		width: ms(7);
		height: 100vh;
		display: flex;
		flex-direction: column;
		color: $color-text-icon;
		box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);
		animation: slidein .1s alternate;
		.sidenav-user{
			background-color: darken($dark-primary-color, 10%);
			padding: ms(0) ;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			&>span {
				font-size: ms(2);
				font-weight: bold;
				margin: ms(-2) 0;
			}
			&>img{
				width: ms(5); 	
			}
			@keyframes slidein{
				from {
					transform: translateX(ms(7));
				}
				to {
					transform: transformX(0);
				}
			}
		}
		.sidenav-content {
			flex: 1;
			background-color: $primary-color;
			text-align: center;
			&>a{
				display: inline-block;
				width: 100%;
				padding: ms(1) 0;
				font-style: ms(1);
				&:hover{
					background-color: $light-primary-color;
					color: $primary-text;
				}
			}
		}
	}
</style>