import  { useState, useRef } from "react";

import BurgerMenu from "./BurgerMenu.jsx";
import {Link} from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenRef = useRef(isOpen);

  const toggle = flag => {
    isOpenRef.current = flag
    setIsOpen(flag)
  }
      // Automatically close the menu if the user clicks outside the menu
    // https://www.w3docs.com/snippets/javascript/how-to-detect-a-click-outside-an-element.html
  /*  useEffect(() => {
      document.addEventListener("click", (evt) => {
          let target = evt.target; // clicked element      
          const burger = document.getElementById("burger");
          const menu = document.getElementById("menu");
          do {
              if (target === menu || target === burger) {
                  return;
              }
              // Go up the DOM
              target = target.parentNode;
          } while (target);
          toggle(false);
      });
  }, [])*/

 // const isHome = window.location.pathname.length === 1
 
  return (
    <header className="main">
      <div className="title">
        <Link to="/">
          <h1>1NDR<span className="subtitle">Works<span className="by">by</span>Kevin Cincotta</span>
          </h1>
        </Link>
        <BurgerMenu isOpen={isOpen} toggle={toggle} />
      </div>
      <div id="menu" className={`menu ${isOpen ? "show" : "hide"}`}>
      <div className="series">Series</div>
          <ul className="series">
          <li>
            <Link to="/apres-ski">Apres Ski</Link>
          </li>
          <li>
            <Link to="/analog-future">Analog Future</Link>
          </li>
          <li>
            <Link to="/gestures">Gestures of Love</Link>
          </li>
          </ul>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/faves">Favorites <i className="fa-solid fa-heart"/></Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/murals">Murals</Link>
          </li>
          <li>
            <Link to="/commissions">Commissions</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
