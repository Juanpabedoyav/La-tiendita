import React from 'react'
import { NavBarStyles } from '../styles/NavBar.styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <NavBarStyles>
        <h1 className="titulo">La tiendita</h1>
        <Link to="/registro">
          <FontAwesomeIcon icon={faPlus} />
        </Link>
      </NavBarStyles>
    );
}

export default NavBar
