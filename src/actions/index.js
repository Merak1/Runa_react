// export const GET_POKEMON = 'GET_POKEMON';
export const PING = 'PING'
export const FETCH_ARTIST_DATA = 'FETCH_ARTIST_DATA'
export const FETCH_ARTIST_DATA_FAIL = 'FETCH_ARTIST_DATA_FAIL'

// export const fetchPokemon = () => ({
//   type: GET_POKEMON,
// });
//TODO (0.-) The action ping is created, with the type 'PING', this will 
export const ping = () => ({
  type: PING
});

export const fetchArtistData = (artistData) =>
  ({
    type: FETCH_ARTIST_DATA, payload: artistData
  });

export const fetchArtistDataFail = () =>
  ({
    type: FETCH_ARTIST_DATA_FAIL
  });
