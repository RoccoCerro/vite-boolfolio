<template>
  <div>
    ciao mondo <font-awesome-icon :icon="['fas', 'user']" />
  </div>
  <AppMain />
</template>

<script>

  import AppMain from './components/AppMain.vue'

  export default {
    components: {
      AppMain
    },
    data(){
      return{

      }
    }
  }
</script>

<style lang="scss">
  @use './style/general.scss';
</style>