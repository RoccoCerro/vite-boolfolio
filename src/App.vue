<template>
  <div>
    <!-- ciao mondo <font-awesome-icon :icon="['fas', 'user']" /> -->
  </div>
  <AppHeader />
  <AppMain />
</template>

<script>

  import AppMain from './components/AppMain.vue';
  import AppHeader from './components/AppHeader.vue';

  export default {
    components: {
      AppMain,
      AppHeader
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