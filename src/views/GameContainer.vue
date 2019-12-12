<template>
  <div class="wrapper">
    <Game :name="name"/>
  </div>
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
