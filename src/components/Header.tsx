// styles - scss
import '../styles/Header.scss';
// react uses - router dom
import Logo from '../assets/imgs/Logo.svg';
// components
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className=" bgHeader">
      <div className="container bgContentHeader">
        <img src={Logo} alt="" />
        <Link to="/">Home</Link>
        <Link to="/pokedex">Pokedex</Link>
        <Link to="/contato">Contato</Link>
      </div>
    </header>
  );
};
