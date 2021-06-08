import { NavLink } from "react-router-dom";

export default function Menu() {
    return (
        <nav className="menu">
          <NavLink className="menu__item" to="/"  exact activeClassName={ 'menu__item-active' }>Главная</NavLink>
          <NavLink className="menu__item" to="/drift" exact activeClassName={ 'menu__item-active' }>Дрифт-такси</NavLink>
          <NavLink className="menu__item" to="/timeattack" exact activeClassName={ 'menu__item-active' }>Time Attack</NavLink>
          <NavLink className="menu__item" to="/forza"  exact activeClassName={ 'menu__item-active' }>Forza Karting</NavLink>
        </nav>
    );
}