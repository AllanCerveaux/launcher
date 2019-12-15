<template>
	<aside @click="hideSidenav" v-if="isAuthenticated" class="menu">
		<ul class="menu-list">
			<li v-for="game in games" :key="game.name">
				<router-link :to="`/game/${game.slug}`">
					<img src="https://picsum.photos/50" alt="">
					<span>{{game.name}}</span>
				</router-link>
			</li>
		</ul>
	</aside>	
</template>

<script>
	import { TOGGLE_SIDENAV } from '@/store/actions/animations'
	import { mapGetters } from 'vuex'

	export default {
		name: 'menu',
		data(){
			return {
				games: [
					{
						name:"Game 1",
						slug:"game-1",
						icon: "https://picsum.photos/50"
					},
					{
						name:"Game 2",
						slug:"game-2",
						icon: "https://picsum.photos/50"
					},
					{
						name:"Game 3",
						slug:"game-3",
						icon: "https://picsum.photos/50"
					},
				]
			}
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

<style lang="scss" scoped="">
@import '../assets/modules/variables.scss';

span{
	z-index: 1;
	display: none;
	position: absolute;
	background-color: $dark-primary-color;
	border-radius: ms(-3);
	padding: ms(1) ms(-3) ms(1) ms(1);
	left: ms(1);
}

.menu {
	z-index: 0;
	grid-area: 2 / 1 / 6 / 2; 
	background-color: rgba($light-primary-color, .5);
}

.menu-list{
	height: 70%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}

li{
	z-index: 2;
	display: flex;
	align-items: center;
	justify-content: center;
}

a{
	border-radius: ms(-3);
	padding: ms(-2);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	color: $color-text-icon;
	text-decoration: none;
	&:hover{
		background-color: $dark-primary-color;
		span{
			display: block;
			z-index: 1;
			animation: slide .14s forwards;
			@keyframes slide{
				100%{
					left: ms(3);
				}
			}
		}
	}
	&.router-link-active {
		padding: ms(-2);
		background-color: darken($light-primary-color, 10%);
		border-radius: ms(-3);
		&>span{
			display: none;
		}
	}
	&>img{
		z-index: 4;
	}
}
</style>