import * as React from "react";
import ReactPaginate from "react-paginate";

class Pokemon extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public loadAPI() {
    const http = new XMLHttpRequest();
    const url = "https://pokeapi.co/api/v2/pokemon/" + 1;

    http.open("GET", url);
    http.send();

    http.onreadystatechange = (e: any) => {
      console.log(http.response);
    };
  }

  public handlePageClick = (data: any) => {
    const selected = data.selected;
    const offset = Math.ceil(selected * 2);

    this.setState({ offset }, () => {
      this.loadCommentsFromServer();
    });
  };

  public componentDidMount() {
    this.loadAPI();
  }

  public render() {
    return (
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={<a href="">...</a>}
        breakClassName={"break-me"}
        pageCount={20}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={this.handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    );
  }
}

export default Pokemon;
