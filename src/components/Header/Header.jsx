import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1000px-Instagram_logo_2022.svg.png' alt='logo'></img>
      </header>
  )
}

export default Header;