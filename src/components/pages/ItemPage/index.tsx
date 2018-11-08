import Axios from "axios";
import * as React from "react";
import { RouteComponentProps } from "react-router";
import NotFound from "../NotFound";

export interface IItemPageProps {
  apiCategory: string;
  routeProps: RouteComponentProps<{ id: string }>;
  page: React.StatelessComponent<any>;
}
interface IItemPageState {
  data: any;
}

class ItemPage extends React.Component<IItemPageProps, IItemPageState> {
  private id: number;

  constructor(props: IItemPageProps) {
    super(props);

    this.id = Number(props.routeProps.match.params.id);

    this.state = { data: false };
  }

  public async loadAPI() {
    try {
      const request = await Axios.get(
        `https://pokeapi.co/api/v2/${this.props.apiCategory}/${this.id}/`
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
    const { page } = this.props;

    return data === 404 ? (
      <NotFound />
    ) : (
      data && React.createElement(page, data)
    );
  }
}

export default ItemPage;
