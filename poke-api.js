const pokeApi = {}

pokeApi.getPokemons = (offset = 0,limit = 10) =>{

    pokeApi.getPokemonsDetail = (pokemon) =>{
        return fetch(pokemon.url)
        .then((response) => response.json())
    } 
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

   return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) =>jsonBody.results)
    .catch((error)=> console.error(error))
    .then((pokemons) => pokemons.map((pokeApi.getPokemonsDetail)))
    .then((detailRequest) => Promise.all(detailRequest))
    .then((pokemonsDetails) => pokemonsDetails)
}

