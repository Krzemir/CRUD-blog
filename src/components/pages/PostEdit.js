import {  useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import PostEditForm from "../features/PostEditForm";

const PostEdit = () => {
    

    return ( 
        <Container>
        <Row className="justify-content-center">
            <Col lg={9}>
                <h1>Edit post</h1>
                <PostEditForm />
            </Col>
   
        </Row>
    </Container>
     );
}
 
export default PostEdit;