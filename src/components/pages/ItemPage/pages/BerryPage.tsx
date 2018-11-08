import * as React from "react";
import { formatName } from "src/util";
import Attribute, { IAttribute } from "./components/Attribute";

interface IBerryData {
  name: string;
  flavors: IFlavor[];
  [key: string]: any;
}

interface IFlavor {
  flavor: IAttribute;
  potency: number;
}

export default (props: IBerryData) => {
  const { name, flavors } = props;
  console.log(name);
  console.log(flavors);

  const flavorElements = flavors.map(flavor => (
    <li key={flavor.flavor.name}>
      <ul>
        <li>
          Flavor: <Attribute attribute={flavor.flavor} />
        </li>
        <li>Potency: {flavor.potency}</li>
      </ul>
    </li>
  ));

  return (
    <main className="itemPage itemPage--Berry">
      <header className="itemPage__header">
        <h2 className="itemPage__header__title">{formatName(name)}</h2>
      </header>
      <div className="itemPage__flavors">
        <h3>Flavors: </h3>
        <ul>{flavorElements}</ul>
      </div>
    </main>
  );
};
