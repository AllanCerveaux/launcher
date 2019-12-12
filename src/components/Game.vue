<template>
	<section class="game">
		<div class="game-articles">
			<article class="article-body"
			v-for="article in articles[name]" 
			:key="article.title"
			@click="goToArticle(article.url)" 
			:style="`background: linear-gradient(rgba(33, 33, 33, .45), rgba(33, 33, 33, .45)), url(${article.image}); background-size: cover`">
			<h2 class="article-title">{{article.title}}</h2>
			<p>{{article.excerpt}}</p>
		</article>
	</div>
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
.game{
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	.game-articles {
		width: 60%;
		display: flex;
		justify-content: space-around;
		.article-body {
			&:hover{
				transform: translateY(-.2em);
			}
			width: 25%;
			color:#FFF;
			cursor: pointer;
			padding: 0 .5em;
			border-radius: 2% 2%;
			text-shadow: -1px 1px 0 black;
			transition: transform .14s ease;
			box-shadow: -1px 1px 1px rgba(33,33,33,.5);
		}
	}
}
.game-play {
	width: 30%;
	display: flex;
	justify-content: flex-end;
	button {
		width: 10em;
		height: 3em;
		color: #FFF;
		font-size: 2em;
		font-weight: bold;
		margin: 0 1em 2em 0;
		background: #689F39;
		background: linear-gradient(to top, #689F39, #8BC34B);
		border-radius: 5px;
		border: 2px #689F38 solid;
	}
}
</style>