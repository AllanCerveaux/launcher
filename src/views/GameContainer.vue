<template>
  <Game :name="name"/>
</template>

<script>
// @ is an alias to /src
import Game from '@/components/Game.vue'

export default {
  name: 'game-container',
  components: {
    Game
  },
  props: {
    name: {
      type: String,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
