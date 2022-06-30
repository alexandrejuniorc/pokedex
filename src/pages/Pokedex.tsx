// styles - scss
import '../styles/Pokedex.scss';
// react uses - useState, useEffect
import { useEffect, useState } from 'react';
// axios
import axios from 'axios';
// api
import { Api } from 'src/Api';
// icon
import IconSearch from '../assets/imgs/IconSearch.svg';
// components
import { Header } from 'src/components/Header';

//interface
interface IPoke {
  name: string;
}

export const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    // get pokemon results in array
    const showPokemons = async () => {
      const { data }: any = await Api.get('pokemon?offset=5&limit=5', {
        method: 'GET',
      }).catch((error) => console.log(error));
      // show api data
      // console.log(data);
      const { results }: any = await data;
      // show api results
      // console.log(results);
      const newPokes: any = [];

      for (const pokemon of results) {
        // return pokemon skills
        // console.log(pokemon);
        const { data }: any = await axios.get(pokemon.url);
        // returns each pokemon's object along with its abilities
        // console.log(data);
        const newPoke = Object.assign({ ...pokemon }, data);
        // returns an object with all pokemons
        // console.log(newPoke);
        newPokes.push(newPoke);
      }
      setPokemons(newPokes);
    };

    showPokemons();
  }, []);

  // console.log(pokemons);
  //  console.log(pokemons[0].sprites.other.dream_world.front_default);

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
