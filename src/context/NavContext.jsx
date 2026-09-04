import { createContext, useRef, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const NavBarContext = createContext();
const NavContext = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  const navGreenRef = useRef(null);
  console.log(navOpen, "from context");

  return (
    <NavBarContext value={[navOpen, setNavOpen,navGreenRef]}>{children}</NavBarContext>
  );
};

export default NavContext;
