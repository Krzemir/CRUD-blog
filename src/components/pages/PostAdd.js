import { Col, Container, Row } from "react-bootstrap";
import PostAddForm from "../features/PostAddForm";

const PostAdd = () => {
    return ( 
        <Container>
            <Row className="justify-content-center">
                <Col lg={9}>
                    <h1>Add new post</h1>
                    <PostAddForm />
                </Col>
       
            </Row>
        </Container>
     );
}
 
export default PostAdd;