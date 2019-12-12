<template>
  <div class="app">
    <NavBar/>
    <Menu/>
    <router-view/>
  </div>
</template>

<script>
  import NavBar from '@/views/NavBar.vue'
  import Menu from '@/views/Menu.vue'

  export default {
    name: 'app',
    components: {
      NavBar,
      Menu
    }
  }
</script>

<style lang="scss">
body{
  padding: 0;
  margin: 0;
}
.app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url("https://picsum.photos/1280/720");
  background-size: cover;
  color: #212121;
  height: 100vh;
  display: grid;
  grid-template-columns: .2fr repeat(4, 1.5fr);
  grid-template-rows: 1fr repeat(4, 2fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px; 
  .navbar{
    grid-area: 1 / 1 / 2 / 6;
    background-color: #455A64;
    display: flex;
    align-items: center;

  }
  .menu{
    grid-area: 2 / 1 / 6 / 2;
  }
  .wrapper{
    grid-area: 2 / 2 / 6 / 6;
  }
}



</style>
