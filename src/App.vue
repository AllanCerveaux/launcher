<template>
  <div class="app">
    <NavBar/>
    <Menu />
    <div @click="hideSidenav" class="wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
  import { TOGGLE_SIDENAV } from '@/store/actions/animations'
  import { mapGetters } from 'vuex'

  import NavBar from '@/components/NavBar.vue'
  import Menu from '@/components/Menu.vue'


  export default {
    name: 'app',
    components: {
      NavBar,
      Menu
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
        'isOpen'
      ])
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
  .wrapper {
    grid-area: 2 / 2 / 6 / 6;
  }
</style>
