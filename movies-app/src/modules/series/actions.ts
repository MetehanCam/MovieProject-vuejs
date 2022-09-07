import axios from 'axios';

const api='https://omdbapi.com/?apiKey=5daa75b6&t=';
export const searchSeries=({commit}: any,series: any)=>{
    axios.get(`${api}${series}&type=series`)
    .then((response: { data: any; })=>{
        commit('FETCH_SERIES',response.data);
    });
}


export const getEpisodes=({commit}: any,payload: { t: any; season: any; })=>{
    // console.log('the season muber ',payload.season)
    axios.get(`https://omdbapi.com/?apiKey=5daa75b6&t=${payload.t}&type=series&season=${payload.season}`)
    .then((response: { data: any; })=>{
        commit('FETCH_SEASON',response.data);
    })
}

export const clearStates=({commit}: any)=>{
    commit('CLEAR_STATE');
}