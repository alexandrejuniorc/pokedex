// styles - scss
import '../styles/Home.scss';
// components
import { Header } from 'src/components/Header';
// react uses - router dom
import { Link } from 'react-router-dom';
// img's
import Banner from '../assets/imgs/BannerHome.svg';

export const Home = () => {
  return (
    <>
      <Header />
      <section className="bgHome container">
        <div className="bgContentHome">
          <h1>Qual pokemon você escolheria?</h1>
          <p>
            Você pode saber o tipo de Pokémon, seus pontos fortes, fracos e
            habilidades.
          </p>
          <Link to="/pokedex">Veja os pokemons</Link>
        </div>
        <div>
          <img src={Banner} alt="Banner" />
        </div>
      </section>
    </>
  );
};
