import * as React from "react";
import { Link, Route, RouteComponentProps, Switch } from "react-router-dom";
import ItemPage from "./pages/ItemPage";
import BerryPage from "./pages/ItemPage/pages/BerryPage";
import MachinePage from "./pages/ItemPage/pages/MachinePage";
import PokemonPage from "./pages/ItemPage/pages/PokemonPage";
import NotFound from "./pages/NotFound";
import Pagination, { paginationRouteProps } from "./pages/Pagination";
import Root from "./pages/Root";

const limit = 20;
const apiURL = "https://pokeapi.co/api/v2/";

const pokemonPagination = (routeProps: paginationRouteProps) => (
  <Pagination
    limit={limit}
    apiURL={apiURL}
    apiCategory="pokemon"
    routeProps={routeProps}
  />
);

const berriesPagination = (routeProps: paginationRouteProps) => (
  <Pagination
    limit={limit}
    apiURL={apiURL}
    apiCategory="berry"
    routeProps={routeProps}
  />
);

const machinesPagination = (routeProps: paginationRouteProps) => (
  <Pagination
    limit={limit}
    apiURL={apiURL}
    apiCategory="machine"
    routeProps={routeProps}
  />
);

const pokemonPage = (routeProps: RouteComponentProps<{ id: string }>) => (
  <ItemPage apiCategory="pokemon" routeProps={routeProps} page={PokemonPage} />
);

const berryPage = (routeProps: RouteComponentProps<{ id: string }>) => (
  <ItemPage apiCategory="berry" routeProps={routeProps} page={BerryPage} />
);

const machinePage = (routeProps: RouteComponentProps<{ id: string }>) => (
  <ItemPage apiCategory="machine" routeProps={routeProps} page={MachinePage} />
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
          <Route path="/pokemon/page/:page" render={pokemonPagination} />
          <Route path="/berry/page/:page" render={berriesPagination} />
          <Route path="/machine/page/:page" render={machinesPagination} />
          <Route path="/pokemon/:id" render={pokemonPage} />
          <Route path="/berry/:id" render={berryPage} />
          <Route path="/machine/:id" render={machinePage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
