import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";
import NavbarIcon from "../Utils/Icons/NavbarIcon";
import { List } from "@phosphor-icons/react";
import {motion, useMotionValueEvent, useScroll} from "framer-motion";
import { useState } from "react";


const Navbar = () => {
  const navigate = useNavigate();
  const {scrollY} = useScroll();
  const [hidden, setHidden] = useState(false);

  /*
  instead of doing below code to get value of scroll,u can use framer motion's hook.

  useEffect(() => {
    const unsub = scrollY.on("change", (latest) => console.log(latest))
    return () => unsub();
  }, [scrollY])
  */
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous=scrollY.getPrevious();
    if (previous && latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  
  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="sticky top-0 z-50 bg-metallic-gradient shadow-md w-full flex justify-between items-center font-medium p-5"
      >
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <NavbarIcon />
        </div>

        <ul className="xs:flex xs:items-center xs:gap-5 text-sm hidden ">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link smooth to="#work">
              WORK
            </Link>
          </li>
          <li>
            <Link smooth to="#contact">
              CONTACT
            </Link>
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

        <div className="xs:hidden block cursor-pointer">
          <List size={32} />
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
