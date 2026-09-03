import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const NavBarContext = createContext();
const NavContext = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);
  
  return (
    <NavBarContext value={ [navOpen, setNavOpen] }>{children}</NavBarContext>
  );
};

export default NavContext;
