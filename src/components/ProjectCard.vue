<template>
  <div>
    <div class="card h-100" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ project.title }}</h5>
        <p class="card-text">{{ project.content }}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
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
      console.log('project')
    }

  }
</script>

<style lang="scss" scoped>

</style>