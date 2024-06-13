<template>
  <section class="project">
    <div class="container">
      <h1>Dettaglio Progetto</h1>
      <p>{{ $route.params.slug }}</p>
      <button @click="goBack" class="btn btn-outline-dark">
        Indietro
      </button>
    </div>
  </section>
</template>

<script>
  export default {
    methods:{
      goBack(){
        this.$router.back()
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>