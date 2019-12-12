<template>
	<section class="navbar">
		<nav >
			<div class="navbar-left">
				<img class="navbar-brand" src="https://picsum.photos/50" alt="">
				<router-link class="item" to="/game">GAMES<hr/></router-link>
				<router-link class="item" to="/news">NEWS <hr/></router-link>
				<router-link class="item" to="/chat">CHAT <hr/></router-link>
			</div>
			<div class="navbar-right">
				<div class="user">
					<span class="username">Callan</span>
					<img src="https://picsum.photos/35" alt="">
				</div>
			</div>
		</nav>
	</section>
</template>

<script>
	export default {
		data(){
			return {}
		}
	}
</script>

<style lang="scss" scoped>
nav {
	display: flex;
	width: 100%;
	.navbar-left{
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-around;
		align-items:center;
		width: 30%;
		font-size: 1.15em;
	}
	.item {
		color: #FFFFFF;
		text-decoration: none;
	}
	hr {
		height: .3em;
		border:none;
		border-radius: 10%;
		background-color: transparent;
		padding: 0;
		margin: 0;
		transition: width .15s ease;
		width: 0;
	}
	img.navbar-brand {
		padding: 0 .3em;		
	}
	a {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: .5em 0;
		width: 20%;
		opacity: .5;
		&:hover{
			opacity: 1;
			border-radius: 5%;
			background-color: rgba(255,255,255, 0.3);
			hr{
				display: block;
				background-color: #fff;
				width: 30%;
			}
		}
		&.router-link-active {
			opacity: 1;
			background-color: transparent;
			hr {
				display: block;
				background-color: #536DFE;
				width: 30%;
			}
		}
	}
	.navbar-right{
		flex: 1 0 10%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		.user{
			width: 13%;
			display: flex;
			align-items: center;
			justify-content: space-around;
			img{
				border-radius: 100%;
			}
			.username {
				color: #FFFFFF;
				font-weight: bold;
			}
		}
	}
}
</style>