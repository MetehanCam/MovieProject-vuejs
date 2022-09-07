<template>
  <div class="container">
      <div class="row">
          <div class="col-8 offset-col-2 container">
          <form>
              <div class="form-group">
                  <input type="text" v-model="search" class="form-control" name="series" id="series" placeholder="Dizinin adini yaziniz...">
              </div>
          </form>
      </div>
      <div class="col-12">
          <div class="form-group">
              <button @click="searchSeries()" class="btn btn-primary">Diziyi Ara</button>
          </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            search:''
        }
    },
    methods:{
        searchSeries(){
            return this.$store.dispatch('searchSeries',this.search);
        }
    }
}
</script>

<style>

</style>