<template>
	<aside v-if="isAuthenticated" class="menu">
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
		computed: {
			...mapGetters([
				'isAuthenticated'
      ])
		}
	}
</script>

<style lang="scss" scoped="">
</style>