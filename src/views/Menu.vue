<template>
	<aside class="menu">
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
		}
	}
</script>

<style lang="scss" scoped="">
.menu {
	background-color: rgba(33, 33, 33, 0.6);
	z-index:0;
	position: relative;
}
.menu-list{
	padding: 0 1em;
	li {
		margin: 1em 0;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		a{
			display: flex;
			align-items: center;
			justify-content: center;
			padding: .3em;
			span{					
				display: none;
			}
			&:hover{
				transform: translateX(.3em);
				span{
					display: block;
					z-index: 1;
					width: 6em;
					position: absolute;
					left: 0px;
					top:-1px;
					background-color: #212121;
					padding: 1.4em;
					color: #fff;
					font-weight: bold;
					text-align: right;
					border-radius: 5px;
					animation: slide 0.2s forwards;
				}
				@keyframes slide{
					100%{
						width:7em;
					}
				}
			}
			transition: transform .14s ease;
			img{
				z-index: 2;
			}
			&.router-link-active{
				transform: none;
				border-radius: 10%;
				background-color: rgba(255, 255, 255, .3);
				span{
					display: none;
				}
			}
		}
	}
}
</style>