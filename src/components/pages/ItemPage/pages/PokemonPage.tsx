import * as React from "react";
import { formatName } from "src/util";
import Attribute, { IAttribute } from "./components/Attribute";

interface IPokemonData {
  name: string;
  abilities: IAbility[];
  forms: IAttribute[];
  height: number;
  weight: number;
  [key: string]: any;
}

interface IAbility {
  ability: IAttribute;
  is_hidden: string;
  slot: number;
}

export default (props: IPokemonData) => {
  const { name, abilities, height, weight } = props;

  const renderAbility = (ability: IAbility) => (
    <li key={ability.slot}>
      <Attribute attribute={ability.ability} />
    </li>
  );
  const normalAbilities = abilities
    .filter(ability => !ability.is_hidden)
    .map(renderAbility);
  const hiddenAbilities = abilities
    .filter(ability => ability.is_hidden)
    .map(renderAbility);

  return (
    <main className="itemPage itemPage--Pokemon">
      <header className="itemPage__header">
        <h2 className="itemPage__header__title">{formatName(name)}</h2>
      </header>
      <div className="itemPage__size">
        <p>Height: {height}m</p>
        <p>Weight: {weight}kg</p>
      </div>
      <div className="itemPage__abilities">
        <div className="itemPage__abilities__normal">
          <h3>Abilities: </h3>
          <ul>{normalAbilities}</ul>
        </div>
        <div className="itemPage__abilities__hidden">
          <h3>Hidden Abilities: </h3>
          <ul>{hiddenAbilities}</ul>
        </div>
      </div>
    </main>
  );
};
