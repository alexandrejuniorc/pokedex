// icon
import IconSearch from '../assets/imgs/IconSearch.svg';
// styles - scss
import '../styles/SearchPokemons.scss';

export const SearchPokemons = () => {
  return (
    <section>
      <div className="bgSearchPoke container">
        <h1>Mais de 250 Pokemons para você escolher o seu favorito</h1>
        <div className="bgInputSearch">
          <input
            type="search"
            id="input"
            placeholder="Pesquisar pokemon"
            maxLength={20}
          />
          <img src={IconSearch} alt="" />
        </div>
        <div className="bgOptions container">
          <select className="optionsType" name="type" id="type">
            <option value="" disabled>
              Tipo
            </option>
            <option value="type">Fogo</option>
            <option value="type">Planta</option>
            <option value="type">Eletrico</option>
            <option value="type">Água</option>
            <option value="type">Normal</option>
          </select>

          <div className="optionsMethod">
            <select className="optionsType" name="atack" id="atack">
              <option value="">Ataque</option>
            </select>
            <select className="optionsType" name="defends" id="defends">
              <option value="">Defesa</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};
