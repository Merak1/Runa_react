// ? Funcion de artista random sin aplicar, la API no se presta para buscar de manera random
// ? Aún que de todas formas funciona, solamente que no en todos los casos se obtiene un
// ? artista pues no lo busca por id si no por nombre
// ? sólamente se da la impresión que es random

//* requiere axios


const getRandomBand = async () => {

  console.log("random works")
  const randomNum = this.getRandom()
  // const res = await axios.get(`https://api.discogs.com/artists/${randomNum}/?token=gQSRUSJcpTLakilhMvhtYwsNHtcwCMaKGeEqZPJh`);
  const res = await axios.get(`https://api.discogs.com/artists/${randomNum}/releases`);
  // console.log("res from random band", res)
  const results = await res.data
  // console.log("results from random band", results)
  const releases = results.releases
  console.log("releases from random band", releases)
  this.setState({ artistData: releases })
  this.getRandomBandResources()
}

const getRandomBandResources = async () => {

  this.state.artistData.map((artist, i) =>
    // console.log("artist", artist)
    console.log("artist", artist.resource_url)

  )
  //resource_url sigue el patron  https://api.discogs.com/masters/{id}
  //esta id se encuentra en artist.id mapeado 
  const resources = this.RandomBandResources
  console.log("resources from get randombandresources", resources)
  const res = await axios.get(resources)
  const results = await res.data
  console.log("results from random band resources ", results)
}