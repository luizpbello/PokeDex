import { elements } from "../base.js";

export const renderPokemon = ({
  pokemon_id,
  pokemon_name,
  pokemon_img,
  pokemon_type1,
  pokemon_type2,
}) => {
  const renderCard = `<div id="card-container" class="card-container">
    <div class="card-main">
      <div class="card-title">
        <span id="pokemon-id">${pokemon_id}</span>
        <span id="pokemon-name">${pokemon_name}</span>
      </div>

      <div id="img-container">
        <img src="${pokemon_img}" target="_blank"  id="pokemon-img" />
      </div>
    
      <div id="pokemon-types">
        <span class="${pokemon_type1}" id="type1">${pokemon_type1}</span>
        <span class="${pokemon_type2}" id="type2">${pokemon_type2}</span>
      </div>
    </div>
  </div>
  <hr>
  `;

  
  elements.container.insertAdjacentHTML("beforeend", renderCard);
};
