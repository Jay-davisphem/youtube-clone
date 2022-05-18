import { useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Categoriesbar from "./components/categoriesBar/CategoriesBar";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import LoginScreen from './screens/loginScreen/LoginScreen'
import { Container } from "react-bootstrap";
import "./_app.scss";

function App() {
  const [isSidebar, setIsSidebar] = useState(false);

  const handleSidebar = () => setIsSidebar((value) => !value);
  return (
    {/*<>
      <Header handleSidebar={handleSidebar} />
      <div className="app__container">
        <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
        <Container fluid className="app__main">
          <HomeScreen />
        </Container>
      </div>
    </>*/},
    <LoginScreen />
  );
}

export default App;
