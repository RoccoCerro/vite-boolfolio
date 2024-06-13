<template>
  <header>
    <nav class="navbar navbar-expand-lg" :class='isOpen === true ? "my-bg-header" : ""'>
      <div class="container-fluid">
        <a class="navbar-brand my-brand" href="http://127.0.0.1:8000/admin/projects">
          <img src="/img/logo2.png" alt="">
        </a>
        <button @click="openClose" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <!-- <a class="nav-link active text-white" aria-current="page" href="http://127.0.0.1:8000/">Casa</a> -->
              <RouterLink class="nav-link" :to="{ name: 'home' }">Casa</RouterLink>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="http://127.0.0.1:8000/admin/projects">Progetti</a> -->
              <RouterLink class="nav-link" :to="{ name: 'portfolio' }">Progetti</RouterLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Gestisci
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item text-subtitle" href="http://127.0.0.1:8000/admin/technologies">Tecnologie</a></li>
                <li><a class="dropdown-item text-subtitle" href="#">Tipi</a></li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Cerca" aria-label="Search">
            <button class="btn btn-outline-dark " type="submit">Cerca</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    data(){
      return{
        isOpen: false,
      }
    },
    methods:{
      openClose(){
        this.isOpen = !this.isOpen
        console.log(this.isOpen)
      } 
    }
  }
</script>

<style lang="scss" scoped>
@use '../style/partials/header';
</style>