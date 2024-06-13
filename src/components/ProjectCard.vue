<template>
  <div class="card my-card h-100">
    <img src="" class="card-img-top" alt="">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">
        <RouterLink :to="{ name: 'project.show', params: {slug: project.slug} }">
          {{ project.title }}
        </RouterLink>
      </h5>
      <p class="card-text">{{ project.slug }}</p>
      <div class="my-button d-flex justify-content-between gap-2 mt-auto">
        <a href="#" class="btn btn-secondary">Modifica</a>
        <a href="#" class="btn btn-danger">Elimina</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['project'],

    data(){
      return{
      }
    },
    created(){
      console.log(this.project)
    },
    computed:{
      
    }
  }
</script>

<style lang="scss" scoped>
  @use '../style/partials/card.scss'
</style>