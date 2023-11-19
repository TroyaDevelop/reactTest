import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li><NavLink className={classes.item} to="/profile">Профиль</NavLink></li>
        <li><NavLink className={classes.item} to="/news">Новости</NavLink></li>
        <li><NavLink className={classes.item} to="/dialogs">Сообщения</NavLink></li>
        <li><NavLink className={classes.item} to="#">Друзья</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar;