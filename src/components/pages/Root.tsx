import * as React from "react";
import { Link } from "react-router-dom";

class Root extends React.Component {
  public render() {
    return (
      <main className="main main--Root">
        <p>
          Welcome to the wonderful world of Pokémon! This site has everything
          you need to know about these creatures called Pokémon.
        </p>

        <div>
          <div className="intro">
            <h2 className="intro__title">Pokemon</h2>
            <p className="intro__description">
              Pokemon are fantastic creatures with special powers and abilities.
              Some people keep pokemon as pets, and others battle them to become
              pokemon masters.
            </p>
            <Link className="intro__link" to="/pokemon/page/1">
              Click here to see Pokemon number 1
            </Link>
          </div>
          <div className="intro">
            <h2 className="intro__title">Berries</h2>
            <p className="intro__description">
              Berries are snacks for Pokemon. These berries will have various
              effects like healing the pokemon, curing them of status ailments,
              or boosting their abilities!
            </p>
            <Link className="intro__link" to="/pokemon/berries/1">
              Click here to see Berry number 1
            </Link>
          </div>
          <div className="intro">
            <h2 className="intro__title">Machines</h2>
            <p className="intro__description">
              Technical Machines (TMs) and Hidden Machines (HMs) are machines
              that are used to teach pokemon new abilities or "moves". These
              moves can be used in battle or in the outside world to aid your
              journey.
            </p>
            <Link className="intro__link" to="/pokemon/page/1">
              Click here to see Machine number 1
            </Link>
          </div>
        </div>
      </main>
    );
  }
}

export default Root;
