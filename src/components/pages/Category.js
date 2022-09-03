import { Row, Col, Container } from "react-bootstrap";
import PostList from "../features/PostList";
import { useParams } from "react-router-dom";

const Category = () => {

    const {categoryName} = useParams()
    
    return ( 
        <Container>
            <Row className="justify-content-between">
            <Col><h1>Post from category</h1></Col>
            </Row>
            <PostList category={categoryName}/>
        </Container>

     );
}
 
export default Category;