import * as allPokemons from "../views/allPokemonView.js";

class Pokedex {
  constructor(pokemons) {
    this.pokemons = pokemons;
  }

  async getAllPokemons(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      let pokemons = data.results;
      pokemons = pokemons.sort((a, b) => a.id - b.id); // Sort pokemons by id
      for (let i = 0; i < pokemons.length; i++) {
        this.getTypes(pokemons[i]["url"]);
      }
    } catch (error) {}
  }

  async getTypes(url) {
    let pokemons = [];
    await fetch(url)
      .then((res) => (pokemons = res.json()))
      .then((data) => {
        this.setTypes(data.types);
        let pokemon = {
          id: data.id,
          name: data.name.toUpperCase(),
          sprite:
            data["sprites"]["versions"]["generation-v"]["black-white"][
              "animated"
            ]["front_default"],
          type1: data.types[0],
          type2: data.types[1],
        };

        allPokemons.showAll(
          pokemon.id,
          pokemon.name,
          pokemon.sprite,
          pokemon.type1,
          pokemon.type2
        );
      });
  }

  setTypes(types) {
    if (types[1] == undefined) {
      types[0] = types[0].type.name.toUpperCase();
    } else {
      types[0] = types[0].type.name.toUpperCase();
      types[1] = types[1].type.name.toUpperCase();
    }
    return types;
  }
}

export { Pokedex };
