export const FETCH_SERIES=(state: { series: any },series: any)=>{

    state.series=series

}

export const FETCH_SEASON=(state: { season: any },season: any)=>{
    state.season=season
}

export const CLEAR_STATE=(state: { season: null })=>{
    state.season=null;
    // state.series=null;
}