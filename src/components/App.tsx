import * as React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Root from "./pages/Root";

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
        </Switch>
      </div>
    );
  }
}

export default App;
