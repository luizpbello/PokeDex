import * as allPokemons from "../views/allPokemonView.js";

class Pokedex {
  constructor(pokemons) {
    this.pokemons = pokemons;
    
  }

  async getAllPokemons(url) {
    try {
      await fetch(url)
        .then((res) => res.json())
        .then(function (data) {
          let pokemons = data.results;
          return pokemons.map(async function (pokemons) {
            await fetch(pokemons.url)
              .then((res) => res.json())
              .then(function (data) {
                if (data.types[1] == undefined) {
                  data.type1 = data.types[0].type.name.toUpperCase();
                  data.type2 = undefined;
                } else {
                  data.type1 = data.types[0].type.name.toUpperCase();
                  data.type2 = data.types[1].type.name.toUpperCase();
                }
                allPokemons.showAll(
                  data.id,
                  data.name.toUpperCase(),
                  data["sprites"]["versions"]["generation-v"]["black-white"][
                    "animated"
                  ]["front_default"],
                  data.type1,
                  data.type2
                );
              });
          });
        });
    } catch (error) {}
  }

 
}

export { Pokedex };
