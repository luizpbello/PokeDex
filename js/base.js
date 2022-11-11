export const elements = {
  pokemonId: document.getElementById("pokemon-id"),
  pokemonName: document.getElementById("pokemon-name"),
  pokemonImg: document.getElementById("pokemon-img"),
  btn: document.getElementById("search-button"),
  btn_more:document.getElementById('show-more'),
  loading:document.getElementById('loading'),
  inputValue: document.getElementById("searchBox"),
  type1: document.getElementById("type1"),
  type2: document.getElementById("type2"),
  container: document.getElementById('container-pokemon'),
  main_container: document.getElementById('all-pokemons')
};


export const clearUI = () => {
    elements.container.innerHTML = "";    
  };

