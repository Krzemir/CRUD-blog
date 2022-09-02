import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import dateToStr from '../../utils/dateToStr';

const PostCard = (props) => {
    


    return ( 
        <Card style={{ width: '18rem' }} className="mb-3">
            <Card.Body>
                <Card.Title className='mb-3'>{props.title}</Card.Title>
                <Card.Text className='mb-1'><strong>Author: </strong>{props.author}</Card.Text>
                <Card.Text><strong>Published: </strong>{dateToStr(props.publishedDate)}</Card.Text>
                <Card.Text>{props.shortDescription}</Card.Text>
                <Link to={`/post/view/${props.id}`}>
                    <Button variant="primary">Read more</Button>
                </Link>
            </Card.Body>
        </Card>


     );
}
 
export default PostCard;