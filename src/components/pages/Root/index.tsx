import * as React from "react";
import Description from "./components/Description";

class Root extends React.Component {
  public render() {
    return (
      <main className="main main--Root">
        <p>
          Welcome to the wonderful world of Pokémon! This site has everything
          you need to know about these creatures called Pokémon.
        </p>

        <Description
          title="Pokémon"
          description="Pokémon are fantastic creatures with special powers and
             abilities. Some people keep Pokémon as pets, and others battle them
             to become Pokémon masters."
          page="pokemon"
        />

        <Description
          title="Berries"
          description="Berries are snacks for Pokémon. These berries will have various
            effects like healing the Pokémon, curing them of status ailments, or
            boosting their abilities!"
          page="berries"
        />

        <Description
          title="Machines"
          description="Technical Machines (TMs) and Hidden Machines (HMs) are machines that
          are used to teach Pokémon new abilities or 'moves'. These moves can
          be used in battle or in the outside world to aid your journey."
          page="berries"
        />
      </main>
    );
  }
}

export default Root;
