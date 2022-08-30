import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const PostCard = (props) => {

    return ( 
        <Card style={{ width: '18rem' }} className="mb-3">
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.shortDescription}
                </Card.Text>
                <Link to={`/post/view/${props.id}`}>
                    <Button variant="primary">Read more</Button>
                </Link>
            </Card.Body>
        </Card>


     );
}
 
export default PostCard;