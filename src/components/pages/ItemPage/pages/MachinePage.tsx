import * as React from "react";
import { formatName } from "src/util";
import { IAttribute } from "./components/Attribute";

interface IMachineData {
  id: 1;
  item: IAttribute;
  move: IAttribute;
  version_group: IAttribute;
}

export default (props: IMachineData) => {
  const { move } = props;

  return (
    <main className="itemPage itemPage--Machine">
      <header className="itemPage__header">
        <h2 className="itemPage__header__title">{formatName(move.name)}</h2>
      </header>
    </main>
  );
};
