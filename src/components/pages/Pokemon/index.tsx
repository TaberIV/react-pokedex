import axios from "axios";
import * as React from "react";
import ReactPaginate from "react-paginate";
import { NavLink } from "react-router-dom";

type apiList = Array<{ name: string; url: string }>;

class Pokemon extends React.Component<{}, { offset: number; data: apiList }> {
  private limit = 20;

  constructor(props: {}) {
    super(props);

    this.state = { offset: 0, data: [] };
  }

  public async loadAPI() {
    const url = "https://pokeapi.co/api/v2/pokemon/";

    const { data } = await axios.get(url);
    const results: apiList = data.results;
    results.splice(802, 1000);

    const { offset } = this.state;
    this.setState({
      data: results.slice(offset, offset + this.limit)
    });
  }

  public handlePageClick = (data: any) => {
    const selected = data.selected;
    const offset = Math.ceil(selected * this.limit);

    this.setState({ offset }, () => {
      this.loadAPI();
    });
  };

  public componentDidMount() {
    this.loadAPI();
  }

  public render() {
    const { offset } = this.state;

    const list = this.state.data.map((pokemon, i) => {
      const num = i + offset + 1;
      const capName =
        pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1);

      return (
        <li key={pokemon.name}>
          <NavLink to={`/pokemon/${num}`}>{capName}</NavLink>
        </li>
      );
    });

    return (
      <div>
        <ol start={offset + 1}>{list}</ol>

        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={<a href="">...</a>}
          breakClassName={"break-me"}
          pageCount={41}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    );
  }
}

export default Pokemon;
