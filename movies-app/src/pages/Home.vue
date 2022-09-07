<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>2022 FİLMLERİ KARŞINIZDA</h1>
          <br>
          <p>Hoşgeldiniz!  Filtrelemeyi kullanarak 2022 filmlerinde özgürce dolaşabilirsiniz</p>
        </div>
      </div>
    </div>
    <show/>
  </div>
</template>

<script lang="ts">
import Show from "../components/Show.vue";
export default {
  components: {
    Show
  }
};
</script>

<style scoped>
</style>