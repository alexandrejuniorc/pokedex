// styles - scss
import '../styles/Pokedex.scss';
// react uses - useState, useEffect
import { useEffect, useState } from 'react';
// icon
import IconSearch from '../assets/imgs/IconSearch.svg';
// components
import { Header } from 'src/components/Header';
// axios
import axios from 'axios';

//interface
interface IPoke {
  name: string;
}

export const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const getAllPokemons = async () => {
    const { data }: any = await axios
      .get('https://pokeapi.co/api/v2/pokemon?offset=5&limit=5')
      .catch((error) => console.log(error));
    const results: any = await data.results;
    // returns a pokemon object
    // console.log(results);

    const newPokes: any = pokemons;
    // return pokemon skills
    // console.log(newPokes);

    for (const pokemon of results) {
      const { data } = await axios.get(pokemon.url);
      // return pokemon skills
      // console.log(data);

      const newPoke = Object.assign({ ...pokemon }, data);
      // returns each pokemon's object along with its abilities
      // console.log(newPoke);

      newPokes.push(newPoke);
      // returns an object with all pokemons
      // console.log(newPokes);
    }
    setPokemons(newPokes);
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  console.log(pokemons);
  /*  console.log(pokemons[0].sprites.other.dream_world.front_default); */

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
      <section>
        <div></div>
        <div>
          {pokemons &&
            pokemons?.map(({ name }: IPoke) => (
              <div key={name}>
                <p>{name}</p>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};
