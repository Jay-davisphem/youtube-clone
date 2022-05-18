import { useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";

import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  const [isSidebar, setIsSidebar] = useState(false);

  const handleSidebar = () => setIsSidebar((value) => !value);
  return (
    <>
      <Header handleSidebar={handleSidebar} />
      <div className="app__container">
        <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  );
};

export default Layout;
