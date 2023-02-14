import { NavLink } from "react-router-dom";

const NavlinkItem = (props) => {
  return (
    <li className="nav-item px-2">
      <NavLink
        to={props.navlinkItem.path}
        className={({ isActive }) =>
          isActive ? "nav-link active-link" : "nav-link"
        }
      >
        {props.navlinkItem.name}
      </NavLink>
    </li>
  );
};

export default NavlinkItem;
