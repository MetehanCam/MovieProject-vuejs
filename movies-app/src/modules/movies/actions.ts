import axios from 'axios';
const api='https://omdbapi.com/?apiKey=5daa75b6&t=';
export const searchmovie=({commit}: any,moviename: any)=>{

        axios.get(`${api}${moviename}&type=movie`)
        .then(movieinfo=>{
            commit('FETCH_MOVIE',movieinfo.data);
        })

}