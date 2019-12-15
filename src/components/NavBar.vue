<template>
	<nav class="navbar">
		<div @click="isOpen = false" class="navbar-left">
			<img class="navbar-brand" src="https://picsum.photos/50" alt="">
			<div v-if="isAuthenticated" class="navbar-items">
				<router-link to="/game">GAMES<hr/></router-link>
				<router-link to="/news">NEWS <hr/></router-link>
				<router-link to="/chat">CHAT <hr/></router-link>
			</div>
		</div>
		<div class="navbar-right">
			<div v-if="isAuthenticated" @click="isOpen = !isOpen" class="sidenav">
				<div class="sidenav-trigger">
					<span>{{isAuthenticated.displayName}}</span>
					<img :src="isAuthenticated.photoURL" alt="">
				</div>
				<div v-if="isOpen" class="sidenav-out">
					<div class="sidenav-user">
						<img :src="isAuthenticated.photoURL" alt="">
						<span>{{isAuthenticated.displayName}}</span>
					</div>
					<div class="sidenav-content">
						<a class="sidenav-item" @click="logout">logout</a>
						<a class="sidenav-item" href="#">Settings</a>
						<a class="sidenav-item" href="#">Report bug</a>
					</div>
				</div>	
			</div>
			<div v-else class="option">
				<a href="#">Settings</a>
				<a href="#">Report bug</a>
			</div>
		</div>
	</nav>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { AUTH_LOGOUT } from '@/store/actions/auth'

	export default {
		data(){
			return {
				isOpen: false
			}
		},
		methods: {
			logout(){ 
				return this.$store.dispatch(AUTH_LOGOUT)
					.then(() => this.$router.push('/login'))
			}
		},
		computed: {
			...mapGetters([
        'isAuthenticated'
      ])
		}
	}
</script>

<style lang="scss" scoped>
	@import '../assets/modules/variables.scss';
	
	hr{
		background-color: $light-primary-color;
		border-radius: ms(-6);
		height: ms(-3);
		border: none;
		padding: 0;
		margin: 0 auto;
		transition: width .14s ease;
		width: 0;
	}

	a{
		text-decoration: none;
		color: rgba($color-text-icon, .7);
	}

	.navbar{
		grid-area: 1 / 1 / 2 / 6;
		background-color: $dark-primary-color;
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: ms(0);
	}
	
	.navbar-left{
		display: flex;
		flex: 1;
		align-items: center;
	}

	.navbar-items{
		width: ms(8);
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		a{
			text-align: center;
			padding: ms(0);
			&:hover{
				background-color: lighten($dark-primary-color, 10%);
				border-radius: ms(-4);
				hr{
					width: ms(1);
				}
			}
			&.router-link-active{
				color: $color-text-icon;
				&:hover{
					background-color: transparent;
				}
				hr {
					width: ms(1);
					background-color: $accent-color;
				}
			}
		}
	}

	.sidenav {
		display: flex;
		flex-direction: column;
		cursor: pointer;
	}
	
	.sidenav-trigger {
		display: flex;
		align-items: center;
		color: $color-text-icon;
		&>img{
			width: ms(2);
			margin-left: ms(-1);
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