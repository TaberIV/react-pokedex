import * as React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Pagination from "./pages/Pagination";
import Root from "./pages/Root";

const pokemonPagination = () => (
  <Pagination
    limit={20}
    apiURL="https://pokeapi.co/api/v2/"
    apiCategory="pokemon"
  />
);

const berriesPagination = () => (
  <Pagination
    limit={20}
    apiURL="https://pokeapi.co/api/v2/"
    apiCategory="berry"
  />
);

const machinesPagination = () => (
  <Pagination
    limit={20}
    apiURL="https://pokeapi.co/api/v2/"
    apiCategory="machine"
  />
);

class App extends React.Component {
  public render() {
    const logo = "/images/Pokeball.png";

    return (
      <div className="App">
        <header className="App__header">
          <Link to="/">
            <img src={logo} className="App__header__logo" alt="logo" />
          </Link>
          <h1 className="App__header__title">Pokédex</h1>
        </header>

        <Switch>
          <Route exact={true} path="/" component={Root} />
          <Route path="/pokemon/page/" render={pokemonPagination} />
          <Route path="/berries/page/" render={berriesPagination} />
          <Route path="/machines/page/" render={machinesPagination} />
        </Switch>
      </div>
    );
  }
}

export default App;
