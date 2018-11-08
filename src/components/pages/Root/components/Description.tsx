import * as React from "react";
import { Link } from "react-router-dom";

const Description = (props: {
  title: string;
  description: string;
  page: string;
}) => (
  <div className="intro">
    <h2 className="intro__title">{props.title}</h2>
    <p className="intro__description">{props.description}</p>
    <Link className="intro__link" to={`/${props.page}/page/0`}>
      Explore: {props.title}
    </Link>
  </div>
);

export default Description;
