<template>
  <div class="container-fluid" v-if="series && series.Response == 'True'">
    <div class="row">
      <div class="col-sm-12 col-lg-3 p-5">
        <div>
          <img
            :src="series.Poster"
            height="500"
            width="400"
            :alt="series.Title"
          />
        </div>
      </div>
      <div class="col-1"></div>
      <div class="col-sm-12 col-lg-7 text-left bg-dark text-white p-1">
        <div class="col-12 text-center">
          <h2>
            <strong>{{ series.Title }} ({{ series.Rated }})</strong>
          </h2>
        </div>
        <hr />
        <div class="col-12">
          <p>
            <strong>Released:</strong>
            {{ series.Released }}
          </p>
        </div>
        <div class="col-12">
          <p>
            <strong>Genre:</strong>
            {{ series.Genre }}
          </p>
        </div>
        <div class="col-12">
          <p>
            <strong>Year:</strong>
            {{ series.Year }}
          </p>
        </div>
        <div class="col-12">
          <p>
            <strong>Languages:</strong>
            {{ series.Language }}
          </p>
        </div>
        <div class="col-12">
          <p>
            <strong>Director:</strong>
            {{ series.Director }}
          </p>
        </div>
        <div class="col-12">
          <p>
            <strong>Cast:</strong>
            {{ series.Actors }}
          </p>
        </div>
        <div class="col-12">
          <p>
            <strong>Plot:</strong>
            {{ series.Plot }}
          </p>
        </div>
        <div class="col-12">
          <p>
            <strong>Seasons:</strong>
            {{ series.totalSeasons }}
          </p>
        </div>
        <div class="col-12">
          <h4>Ratings:</h4>
        </div>
        <div class="col-sm-12">
          <div v-for="(rating, index) in series.Ratings" :key="index">
            <div class="col-6">
              <div>
                {{ rating.Source }}
                <br />
                {{ rating.Value }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-2">
          <h4>Seasons:</h4>
        </div>
        <div class="col-md-6">
          <select
            name="seasons"
            id="seasons"
            v-model="seasonvalue"
            class="form-control"
            @change="getEpisodes()"
          >
            <option value="" selected>Sezon Seciniz</option>
            <option
              v-for="index in parseInt(series.totalSeasons)"
              :key="index"
              :value="index"
            >
              Season {{ index }}
            </option>
          </select>
        </div>
        <br />
      </div>
    </div>
    <hr />
    <hr />
  </div>
  <div v-else-if="series && series.Response == 'False'">
    <div class="container-fluid">
      <div class="row">
        <div class="col-10">
          <img
            src="https://i.pinimg.com/originals/86/41/80/86418032b715698a4dfa6684b50c12af.gif"
            alt="dummy"
            height="350rem"
            width="75%"
          />
        </div>
        <div class="col-2 m-auto">
          <h1>Boyle bir dizi bulunamadi</h1>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="mt-1 bg-light">
    <div class="jumbotron">
      <div class="container">
        <p>Lutfen bir arama yapiniz</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seasonvalue: "",
    };
  },
  props: ["series"],
  methods: {
    getEpisodes() {
      const seasonValue = this.seasonvalue.toString();
      const payload = { t: this.$props.series.Title, season: seasonValue };
      return this.$store.dispatch("getEpisodes", payload);
    },
  },
  beforeUpdate() {
    return this.$store.dispatch("clearStates");
  },
};
</script>

<style>
</style>