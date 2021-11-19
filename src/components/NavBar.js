import React from 'react'
import { NavBarStyles } from '../styles/NavBar.styles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
<<<<<<< HEAD
      <>
    <div></div>
      </>
=======
      <NavBarStyles>
        <h1 className="titulo">La tiendita</h1>
        <Link to="/registro">
          <FontAwesomeIcon icon={faPlus} />
        </Link>
      </NavBarStyles>
>>>>>>> 2316267d8fe6573c20f79ee644ab10b043a8b6d6
    );
}

export default NavBar
