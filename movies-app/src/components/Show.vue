<template>
  <div>
    <div class="container mt-3">
      <div class="row justify-content-between">
        <button @click="prevPage()" class="btn btn-primary col-2">
          Sonraki Sayfa
        </button>
        <div>
          <strong>Sayfa: {{ page }}</strong>
        </div>
        <button @click="nextPage()" class="btn btn-primary col-2">
          Sonraki Sayfa
        </button>
      </div>
      <div>
        <form>
          <div class="form-group">
            <input
              type="text"
              v-model="search"
              name="movie"
              id="movie"
              placeholder="Filmin adini yaziniz..."
            />
          </div>
        </form>
        <div class="col-12">
          <div class="form-group">
            <button @click="formSubmit()" class="btn btn-primary">
              Filtrele
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="card mt-3 col-sm-4"
          v-for="movie in this.movies"
          :key="movie.imbdID"
        >
          <div class="col-12">
            <img
              :src="movie.Poster"
              height="380"
              width="250"
              :alt="movie.Title"
            />
            <div>
              <strong>{{ movie.Title }}</strong>
              <router-link
                to="/movies"
                class="nav-link"
                href="#"
                @click="searchMovie(movie.Title)"
                >Film detayi</router-link
              >
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      movies: {},
      page: 1,
      results: 20,
      search: "life",
    };
  },
  methods: {
    nextPage() {
      if (this.page < this.results / 10) {
        this.page++;
        this.loadData();
      }
    },
    prevPage() {
      if (this.page != 1) {
        this.page--;
        this.loadData();
      }
    },
    formSubmit() {
      this.loadData();
      this.pageCount();
    },
    loadData() {
      axios
        .get(
          `https://omdbapi.com/?apiKey=5daa75b6&s=${this.search}&type=movie&y=2022&page=${this.page}`
        )
        .then((response) => (this.movies = response.data.Search));
    },
    pageCount() {
      axios
        .get(
          `https://omdbapi.com/?apiKey=5daa75b6&s=${this.search}&type=movie&y=2022&page=${this.page}`
        )
        .then((response) => (this.results = response.data.totalResults));
    },
    ...mapActions(["searchmovie"]),
    searchMovie(movieName) {
      this.searchmovie(movieName);
    },
  },
  beforeMount() {
    this.loadData();
    this.pageCount();
  },
};
</script>

  <style scoped>
body {
  font-weight: 200;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
img {
  /* padding: 3px; */
  border: 2px solid lightgray;
  border-radius: 10px;
}
img:hover {
  border: 5px solid green;
  /* transform: scale(0.9); */
}
.info {
  border: 3px solid cadetblue;
  /* padding: 5px; */
  /* border-radius: 5% */
}
@media screen and (max-width: 576px) {
  img {
    height: 350px;
    width: 100%;
  }
}
</style>