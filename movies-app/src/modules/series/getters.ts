export const totalEpisodes=(state: { season: { Episodes: string | any[]; }; })=>{
    return state.season.Episodes.length;
}
