<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top mb-1">
  <a class="navbar-brand" href="#"><img src="../assets/movie.svg" width="100" height="100"></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link to='/' class="nav-link" href="#">Ana Sayfa</router-link>
      </li>
      <li class="nav-item">
        <router-link to='/movies' class="nav-link" href="#">Filmler</router-link>
      </li>
      <li class="nav-item">
        <router-link to='/series' class="nav-link" href="#">Diziler</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>

<script lang="ts">
export default {

}
</script>

<style>

</style>