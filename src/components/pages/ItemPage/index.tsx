import Axios from "axios";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import NotFound from "../NotFound";

type pokemonPageProps = RouteComponentProps<{ id: string }>;
interface IPokemonPageState {
  data: any;
}

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.substring(1);
}

class ItemPage extends React.Component<pokemonPageProps, IPokemonPageState> {
  private id: number;

  constructor(props: pokemonPageProps) {
    super(props);

    this.id = Number(props.match.params.id);

    this.state = { data: false };
  }

  public async loadAPI() {
    try {
      const request = await Axios.get(
        `https://pokeapi.co/api/v2/pokemon/${this.id}/`
      );
      const { data } = request;
      this.setState({ data });
    } catch (e) {
      this.setState({ data: 404 });
    }
  }

  public componentDidMount() {
    this.loadAPI();
  }

  public render() {
    const { data } = this.state;

    return data === 404 ? (
      <NotFound />
    ) : (
      data && (
        <main>
          <header>
            <h2>{capitalizeFirstLetter(data.name)}</h2>
          </header>
        </main>
      )
    );
  }
}

export default ItemPage;
