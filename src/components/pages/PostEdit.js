import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import { getPostById } from "../../redux/postsRedux";
import { Col, Container, Row } from "react-bootstrap";
import PostEditForm from "../features/PostEditForm";

const PostEdit = () => {
    
    const {postId} = useParams();
  //  const postData = useSelector(state => getPostById( state, postId));

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