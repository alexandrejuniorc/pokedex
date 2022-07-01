// styles - scss
import '../styles/Pokedex.scss';
// react uses - useState, useEffect
import { useEffect, useState } from 'react';
// axios
import axios from 'axios';
// api
import { Api } from 'src/Api';
// components
import { Header } from 'src/components/Header';
import { Cards } from 'src/components/Cards';
import { SearchPokemons } from 'src/components/SearchPokemons';

//interface
interface IPoke {
  id: string | number | undefined | any;
  sprites: any;
  name: string;
  types: any;
  abilities: string;
  ability: Array<string | number | null>;
}

export const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    // get pokemon results in array
    const showPokemons = async () => {
      const { data }: any = await Api.get('pokemon?limit=18', {
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
        console.log(newPoke);
        newPokes.push(newPoke);
      }
      setPokemons(newPokes);
    };

    showPokemons();
  }, []);

  return (
    <>
      <Header />
      <SearchPokemons />
      <section>
        <div></div>
        <div className="bgAllCards container">
          {pokemons.map((pokemon: IPoke) => (
            <Cards
              key={pokemon.name}
              classDiv={pokemon?.types[0].type.name}
              name={pokemon.name}
              type={
                pokemon?.types[0].type.name[0].toUpperCase() +
                pokemon?.types[0].type.name.substr(1)
              }
              img={pokemon.sprites.other.dream_world.front_default}
              id={pokemon.id <= 9 ? '#00' + pokemon?.id : '#0' + pokemon?.id}
            />
          ))}
        </div>
      </section>
    </>
  );
};
