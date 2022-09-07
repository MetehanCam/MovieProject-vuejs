<template>
  <div v-if="movie && movie.Response=='True'" >
    <div class=" container mt-3">
    <div class="row">
      <div class="col-sm-12 col-md-10 col-lg-6">
        <div class="col-12 ">
          <img :src="movie.Poster" height="500" width="400" :alt="movie.Title" />
        </div>
      </div>
      <div class="col-sm-12 col-md-10 col-lg-6 text-left bg-dark text-white info">
        <div class="col-12 text-center">
          <h2><strong>{{movie.Title}} ({{movie.Rated}})</strong></h2>
        </div><hr>
        <div class="col-12">
         <p><strong>Released: </strong>{{movie.Released}}</p>
        </div>
        <div class="col-12">
          <p><strong>Genre: </strong> {{movie.Genre}} </p>
        </div>
        <div class="col-12">
          <p>
            <strong>Runtime: </strong>{{movie.Runtime}}
          </p>
        </div>
        <div class="col-12">
          <p>
            <strong>Languages: </strong>{{movie.Language}}
          </p>
        </div>
        <div class="col-12">
          <p>
            <strong>Director: </strong>{{movie.Director}}
          </p>
        </div>
        <div class="col-12">
          <p>
            <strong>Cast: </strong>{{movie.Actors}}
          </p>
        </div>
        <div class="col-12">
          <p>
            <strong>Plot: </strong>{{movie.Plot}}
          </p>
        </div>
        <div class="col-12"><h4>Ratings: </h4></div>
        <div class="col-sm-12">
          <div v-for="(rating,index) in movie.Ratings" :key="index">
            <div class="col-6">
              <div>
              {{rating.Source}} <br>
              {{rating.Value}}
            </div>
            </div>
        </div>
        </div>
      </div>
      </div>
    <br />
    </div>
  </div>
  <div v-else-if="movie && movie.Response=='False'">
   <div class="container-fluid">
          <div class="row">
            <div class="col-10">
                  <img src="https://i.pinimg.com/originals/86/41/80/86418032b715698a4dfa6684b50c12af.gif" alt="dummy" height="350rem" width="75%">
            </div>
            <div class="col-2 m-auto">
                <h1>Boyle bir film bulunamadi</h1>
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
   props:['movie'],
  data(){
    return{
    }
  }
};
</script>

<style scoped>
body{
  font-weight: 200;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
}
  img{
      /* padding: 3px; */
        border: 2px solid lightgray;
        border-radius: 10px;
    }
    img:hover{
        border: 5px solid green;
       /* transform: scale(0.9); */

    }
    .info{
      border: 3px solid cadetblue;
      /* padding: 5px; */
      /* border-radius: 5% */
    }
    @media screen and (max-width:576px) {
      img{
        height: 350px;
        width: 100%;
      }

    }
</style>