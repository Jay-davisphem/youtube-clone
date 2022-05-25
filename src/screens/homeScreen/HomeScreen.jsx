import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Col, Row } from "react-bootstrap";
import { nanoid } from "nanoid";
import Video from "../../components/video/Video";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import "./_homeScreen.scss";
import { getPopularVideos } from "../../redux";

function HomeScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);
  const { videos } = useSelector((state) => state.homeVideos);
  return (
    <Container>
      <CategoriesBar />
      <Row>
        {videos.map((video) => (
          <Col lg={3} md={4} key={video.id}>
            <Video video={video} key={video.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
export default HomeScreen;
