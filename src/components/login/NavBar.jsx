import Logo from "./../../assets/boussole.png";
import LoginLogo from "./../../assets/LoginLogo.png";
import { User } from "./../../data/User";
import LogoutLogo from "./../../assets/LogoutLogo.png";

const NavBar = () => {
  const user = User;
  const token = localStorage.getItem("token");
  return (
    <nav className="navBar">
      <div>
        <div className="identity">
          <div className="LogoDiv">
            <img className="logo" src={Logo} alt="logo" />
          </div>
          <a href="/" className="NavLink">
          <h4 className="title">Travel'Earth</h4>
          </a>
        </div>
      </div>

      <ul className="Nav_Links">
        <li>
          <a href="/localisations" className="NavLink">
            Localisations
          </a>
        </li>
        <li>
          <a href="/favorite" className="NavLink">
            Favoris
          </a>
        </li>
        <li>
          {token ? (
            <a href="/profil">
              <img
                src={user[0].imgUrl}
                alt="ProfilePicture"
                className="LogoutLogo"
              />
            </a>
          ) : (
            <a href="/Login">
              <img src={LoginLogo} alt="Login" className="LoginLogo" />
            </a>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
