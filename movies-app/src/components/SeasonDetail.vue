<template>
  <div  v-if="season && season.Response!='False'">
      <div class="row">
              <div class="col-md-5">
                  <Strong>Total Episodes:  </Strong><h1 class="badge badge-success">{{TotalEpi}}</h1>
              </div>
               <div class="col-md-5">
                  <Strong>Season: </Strong><h1 class="badge badge-success">{{season.Season}}</h1>
              </div><br>
            <div class="col-sm-12 col-md-6 col-lg-4 card " v-for="episode in season.Episodes" :key="episode.Title">
                <div class="card-header bg-primary text-center">
                    <h6>Episode: {{episode.Episode}}</h6>
                </div>
                <div class="container card-body bg-dark text-white">
                    <h4>{{episode.Title}}</h4>
                <span class="badge badge-success">Date: </span><p>{{episode.Released}}</p>
                <span class="badge badge-secondary">Rating: </span><p>{{episode.imdbRating}}</p>
                </div>
               
            </div>
      </div>
  </div>
  <div v-else-if="season && season.Response=='False'">
      Select Correct Season Name from DropDown
  </div>
  <div v-else>
      <div class="container">
          <div class="row">
              <div class="col-12 text-center m-auto">
                
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:['season'],
    computed:{
        TotalEpi(){
            return this.$store.getters.totalEpisodes;
        }
}

}
</script>

<style scoped>
    .card-body{
        font-weight: 200;
        font-size: 20px;
        font-style: italic;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
</style>