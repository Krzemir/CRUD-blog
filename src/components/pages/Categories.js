import { Row, Card, Col, Container, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../redux/categoriesRedux";


const Categories = () => {

    const allCategories = useSelector(getAllCategories)

    return ( 
        <Container>
            <Row className="justify-content-between">
            <Col><h1>All categories</h1></Col>
            </Row>
       
            <Row className="justify-content-start my-4">
            <Card border="primary" style={{ width: '18rem' }}>
            <ListGroup variant="flush">
            {allCategories.map(category=> (
                <ListGroup.Item key={category.id}>
                    <Link to={`/categories/${category.name}`}  className="text-decoration-none">{category.name}</Link>
                </ListGroup.Item>
            ))} 
            </ListGroup>
            </Card>
            </Row>

        </Container>

        


    );
}
 
export default Categories;