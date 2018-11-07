import axios from "axios";
import * as React from "react";
import ReactPaginate from "react-paginate";
import { NavLink } from "react-router-dom";

interface IApiItem {
  name?: string;
  url: string;
}

interface IPaginationProps {
  limit: number;
  apiURL: string;
  apiCategory: string;
}

interface IPaginationState {
  offset: number;
  data: IApiItem[];
}

class Pagination extends React.Component<IPaginationProps, IPaginationState> {
  private apiURL: string;

  constructor(props: IPaginationProps) {
    super(props);

    this.state = { offset: 0, data: [] };

    this.apiURL = this.props.apiURL + this.props.apiCategory + "/";
  }

  public async loadAPI() {
    const { data } = await axios.get(this.apiURL);
    const results: IApiItem[] = data.results;
    results.splice(802, 1000);

    const { offset } = this.state;
    this.setState({
      data: results.slice(offset, offset + this.props.limit)
    });
  }

  public handlePageClick = (data: any) => {
    const selected = data.selected;
    const offset = Math.ceil(selected * this.props.limit);

    this.setState({ offset }, () => {
      this.loadAPI();
    });
  };

  public componentDidMount() {
    this.loadAPI();
  }

  public render() {
    const { offset } = this.state;

    const list = this.state.data.map((item, i) => {
      const num = i + offset + 1;

      const name = item.name
        ? item.name.charAt(0).toUpperCase() + item.name.substring(1)
        : `Machine ${num}`;

      return (
        <li key={item.name}>
          <NavLink to={`/${this.props.apiCategory}/${num}`}>{name}</NavLink>
          <br />
          <a href={`${this.apiURL}/${num}`}>{name}</a>
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

export default Pagination;
