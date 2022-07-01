// styles - scss
import '../styles/Cards.scss';

import poke from '../assets/imgs/imgPoke.svg';

interface ICardsPoke {
  name?: string;
  type?: string;
  hability?: string;
  img?: string;
  id?: string | number;
  classDiv?: string | any;
}

export const Cards = ({
  name,
  type,
  hability,
  img,
  id,
  classDiv,
}: ICardsPoke) => {
  return (
    <div className={`bgCards container ${classDiv}`}>
      <div className="bgInfosPoke">
        <h1>{name}</h1>
        <div className="bgHabilitiesPoke">
          <p>{type}</p>
          <p>{hability}</p>
        </div>
      </div>
      <div className="bgImgPoke">
        <span>{id}</span>
        <img src={img} alt={name} />
      </div>
    </div>
  );
};
