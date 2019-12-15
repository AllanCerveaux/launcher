<template>
	<section class="game">	
		<div class="game-play">
			<button>PLAY</button>	
		</div>
	</section>	
</template>

<script>
	export default {
		name:'game',
		props: {
			name: {
				type: String,
				required: true,
			}
		},
		data(){
			return {
				articles: {
					"game-1": [
					{
						title: "News 1",
						excerpt: "Lorem ipsum dolor sit amet.",
						url:"/news",
						image: "https://picsum.photos/500"
					},
					{
						title: "News 2",
						excerpt: "Lorem ipsum dolor sit amet.",
						url:"/news",
						image: "https://picsum.photos/500"
					},
					{
						title: "News 3",
						excerpt: "Lorem ipsum dolor sit amet.",
						url:"/news",
						image: "https://picsum.photos/500"
					},
					]
				}
			}
		},
		methods: {
			goToArticle(url){
				return this.$router.push(url);
			}
		}
	}
</script>

<style lang="scss" scoped="">
</style>