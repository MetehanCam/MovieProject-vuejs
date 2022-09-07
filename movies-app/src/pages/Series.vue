<template>
  <div >
    <div class="p-3 bg-light">
      <search-box2/>
    </div>
      <series-info :series='getSeries'/>
    <div class="container">
      <season-detail :season='getSeason'/>
    </div>
    </div>

</template>

<script lang="ts">
import SeriesInfo from '../components/SeriesInfo.vue';
import SearchBox2 from '../components/SearchBox2.vue';
import SeasonDetail from '../components/SeasonDetail.vue';
import {mapState} from 'vuex';
export default {
  components:{
    SeriesInfo,
    SearchBox2,
    SeasonDetail
  },
  computed:{
   ...mapState({
      getSeries:(state:any)=>state.series.series,

      getSeason:(state:any)=>state.series.season})
  }



  }

</script>

<style>

</style>