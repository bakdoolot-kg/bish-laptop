import {NavLink} from "react-router-dom";

export const IconLink = ({ src, text, url }) => (
  <NavLink to={url} className="example-link">
    <img style={{width: '5rem'}} className="example-link-icon" src={src} alt={text} />
  </NavLink>
);