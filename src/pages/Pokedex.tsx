import { Header } from 'src/components/Header';
import IconSearch from '../assets/imgs/IconSearch.svg';
import '../styles/Pokedex.scss';
export const Pokedex = () => {
  return (
    <>
      <Header />
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
        </div>
      </section>
    </>
  );
};
