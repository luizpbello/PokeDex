import { Pokemon } from "./models/pokemon.js";
import * as pokemonView from "./views/pokemonView.js";
import { Pokedex } from "./models/getPokemons.js";
import { elements, clearUI } from "./base.js";



const searchPokemon = async () => {
  const state = {};
  try {
    const selected = elements.inputValue.value;
    state.pokemon = new Pokemon(selected);
    await state.pokemon.fetchPokemon(state.pokemon.pokemon.toLowerCase());
    clearUI();
    pokemonView.renderPokemon(state.pokemon);
    elements.inputValue.value = "";
  } catch (error) {}
};

const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";

const showPokemons = async () => {
  elements.loading.classList.remove('none')
  elements.loading.classList.add('loading')
  const allState = {};
  try {
    allState.pokemons = new Pokedex();
    await allState.pokemons.getAllPokemons(url);
    elements.loading.classList.remove('loading')
  elements.loading.classList.add('none')
  } catch (error) {}
};

let offset = 0;
async function nextPage() {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;
  elements.loading.classList.remove('none')
  elements.loading.classList.add('loading')
  const state = {};
  await fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      state.pokemons = new Pokedex();
      offset = offset + 20;
      state.pokemons.getAllPokemons(data.next);
      elements.loading.classList.remove('loading')
      elements.loading.classList.add('none')
    });
}

window.onload = function () {
  showPokemons();
};

elements.btn_more.addEventListener("click", () => {
  nextPage();
});

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    searchPokemon();
  }
});

elements.btn.addEventListener("click", () => {
  searchPokemon();
});
