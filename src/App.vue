<template>
  <div class="app">
    <NavBar/>
    <Menu/>
    <router-view/>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'
  import Menu from '@/components/Menu.vue'

  export default {
    name: 'app',
    components: {
      NavBar,
      Menu
    }
  }
</script>

<style lang="scss">
  @import './assets/modules/variables.scss';
  @import '~reset-css/sass/reset';

  .app{
    height: 100vh;
    display: grid;
    grid-template-columns: .3fr repeat(4, 1fr);
    grid-template-rows: .5fr repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    font-family: $fonts;
  }
</style>
