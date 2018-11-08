import Axios from "axios";
import * as React from "react";
import ReactPaginate from "react-paginate";
import { Link, RouteComponentProps } from "react-router-dom";
import { formatName } from "src/util";

interface IApiItem {
  name?: string;
  url: string;
}

interface IPaginationProps {
  limit: number;
  apiURL: string;
  apiCategory: string;
  routeProps: RouteComponentProps<{ page: string }>;
}

interface IPaginationState {
  page: number;
  data: IApiItem[];
}

export type paginationRouteProps = RouteComponentProps<{ page: string }>;

class Pagination extends React.Component<IPaginationProps, IPaginationState> {
  private apiURL: string;
  private count: number;

  constructor(props: IPaginationProps) {
    super(props);

    const page = Number(this.props.routeProps.match.params.page);
    this.state = { page, data: [] };

    this.apiURL = this.props.apiURL + this.props.apiCategory + "/";
  }

  public async loadAPI() {
    const { data } = await Axios.get(this.apiURL);
    const results: IApiItem[] = data.results;
    this.count = data.count;

    const offset = this.state.page * this.props.limit;
    this.setState({
      data: results.slice(offset, offset + this.props.limit)
    });
  }

  public handlePageClick = (data: any) => {
    const selected = data.selected;
    const page = selected;

    const category = this.props.apiCategory;
    const { history } = this.props.routeProps;
    history.push(`/${category}/page/${page}`);

    this.setState({ page }, () => this.loadAPI());
  };

  public componentDidMount() {
    this.loadAPI();
  }

  public render() {
    const { page, data } = this.state;
    const { limit, apiCategory } = this.props;

    const offset = page * limit;

    const list = data.map((item, i) => {
      const num = i + offset + 1;

      const name = item.name ? formatName(item.name) : `Machine ${num}`;

      return (
        <li key={name}>
          <Link to={`/${apiCategory}/${num}`}>{name}</Link>
        </li>
      );
    });

    const pageCount = Math.ceil(this.count / limit);
    return (
      <main>
        <header>
          <h2>{formatName(apiCategory)}</h2>
        </header>

        <ol start={offset + 1}>{list}</ol>

        <ReactPaginate
          forcePage={page}
          previousLabel={page > 0 ? "Previous" : ""}
          nextLabel={page < pageCount - 1 ? "Next" : ""}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={this.handlePageClick}
          activeClassName={"active"}
        />
      </main>
    );
  }
}

export default Pagination;
