class Pokemon {
  constructor(pokemon) {
    this.pokemon = pokemon;
  }

  async fetchPokemon(pokemon) {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const apiResponse = await fetch(url);
      const data = await apiResponse.json();

      this.getStats(data.stats)
      this.pokemon_id = "#" + data.id;
      this.pokemon_name = data.name.toUpperCase();
      this.pokemon_img =
        data["sprites"]["other"]["official-artwork"]["front_default"];

      if (data.types[1] == undefined) {
        this.pokemon_type1 = data.types[0].type.name.toUpperCase();
        this.pokemon_type2 = undefined;
      } else {
        this.pokemon_type1 = data.types[0].type.name.toUpperCase();
        this.pokemon_type2 = data.types[1].type.name.toUpperCase();
      }
    } catch (error) {
      this.pokemon_id = "#0";
      this.pokemon_name = "Esse Pokémon não existe!";
      this.pokemon_img = "../assets/pokebola3.png";
    }
  }

  getStats(stats) {
    return stats.map(function (stats) {
      console.log(stats.base_stat);
      console.log(stats.stat.name);
    });
  }
}

export { Pokemon };
