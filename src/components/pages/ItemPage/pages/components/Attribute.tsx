import * as React from "react";
import { formatName } from "src/util";

export interface IAttribute {
  name: string;
  url: string;
}

export default ({ attribute }: { attribute: IAttribute }) => (
  <a href={attribute.url}>{formatName(attribute.name)}</a>
);
