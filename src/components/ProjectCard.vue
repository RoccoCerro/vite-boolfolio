<template>
  <div>
    <div class="card my-card">
      <img src="" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">{{ project.slug }}</p>
        <div class="my-button d-flex justify-content-between gap-2">
          <a href="#" class="btn btn-secondary">Modifica</a>
          <a href="#" class="btn btn-danger">Elimina</a>
        </div>
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