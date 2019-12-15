<template>
	<nav class="navbar">
		<div @click="hideSidenav" class="navbar-left">
			<img class="navbar-brand" src="https://picsum.photos/50" alt="">
			<div v-if="isAuthenticated" class="navbar-items">
				<router-link to="/game">GAMES<hr/></router-link>
				<router-link to="/news">NEWS <hr/></router-link>
				<router-link to="/chat">CHAT <hr/></router-link>
			</div>
		</div>
		<div class="navbar-right">
			<Sidenav v-if="isAuthenticated" :user="isAuthenticated"/>
			<div v-else class="option">
				<a href="#">Settings</a>
				<a href="#">Report bug</a>
			</div>
		</div>
	</nav>
</template>

<script>
	import { TOGGLE_SIDENAV } from '@/store/actions/animations'
	import { mapGetters } from 'vuex'
	import Sidenav from './Partials/Sidenav'

	export default {
		components: {
			Sidenav
		},
		methods: {
			hideSidenav(){
				if(this.isOpen){
					return this.$store.dispatch(TOGGLE_SIDENAV)
				}
				return
			}
		},
		computed: {
			...mapGetters([
				'isAuthenticated',
				'isOpen'
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
</style>