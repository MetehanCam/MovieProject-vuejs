<template>
  <div class="container">
      <div class="row">
          <div class="col-8 offset-col-2 container">
          <form>
              <div class="form-group">
                  <input type="text" v-model="search" class="form-control" name="movie" id="movie" placeholder="Filmin adini yaziniz...">
              </div>
          </form>
      </div>
      <div class="col-12">
          <div class="form-group">
              <button @click="searchMovie()" class="btn btn-primary">Filmi Ara</button>
          </div>
      </div>
      </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    data(){
        return{
            search:'',

        }
    },
    methods:{
        // searchMovie(){
        //      this.$store.dispatch('searchmovie',this.search);
        // },
        ...mapActions([
            'searchmovie'
        ]),
        searchMovie(){
            this.searchmovie(this.search);
        }
    }

}
</script>

<style>

</style>