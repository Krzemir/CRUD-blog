import { Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import PostList from "../features/PostList";

const Home = () => {
    return ( 
        <Container>
            <Row className="justify-content-start">
            <Col><h1>All posts</h1></Col>
            <Col ><Link to="/post/add" ><Button variant="outline-info" className="float-end">Add post</Button></Link></Col>
            </Row>
            <PostList />
        </Container>
     );
}
 
export default Home;