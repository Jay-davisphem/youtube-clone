import { Container, Col, Row } from "react-bootstrap";
import { nanoid } from "nanoid";
import Video from "../../components/video/Video";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import "./_homeScreen.scss";
function HomeScreen() {
  return (
    <Container>
      <CategoriesBar />
      <Row>
        {[...new Array(20)].map(() => (
          <Col lg={3} md={4} key={nanoid()}>
            {" "}
            <Video />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default HomeScreen;
