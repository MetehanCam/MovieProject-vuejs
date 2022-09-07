<template>
  <div>
    <div class="p-3 bg-light">
      <search-box />
    </div>
    <movie-info :movie='getMovie'/>
  </div>
</template>

<script lang="ts">
import MovieInfo from "../components/MovieInfo.vue";
import SearchBox from "../components/SearchBox.vue";
import {mapState} from 'vuex';
export default {
  data() {
    return {
      ismovie: ""
    };
  },
  components: {
    MovieInfo,
    SearchBox
  },
  computed: {
    // getMovie() {
    //   return this.$store.state.movies.movie;
    // },

    ...mapState({
      getMovie:(state:any)=>state.movies.movie})
  }
};
</script>

<style scoped>

</style>