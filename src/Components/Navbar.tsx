import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import NavbarIcon from "../Utils/Icons/NavbarIcon";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="w-full flex justify-between items-center font-medium p-5">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <NavbarIcon />
        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link smooth to="#work">WORK</Link>
          </li>
          <li>
            <Link smooth to="#contact">CONTACT</Link>
          </li>
          <li className="sm:pl-2 sm:block hidden ">
            <button
              onClick={() => navigate("/schedule-call")}
              className="bg-black text-white p-3 rounded-lg"
            >
              SCHEDULE A CALL
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
