import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';

const PostAddForm = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [published, setPublished] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
       dispatch(addPost({ title, author, published, shortDescription, content }));
        navigate('/');
      };


    return ( 
    <Form onSubmit={handleSubmit}>
        {/* <Form.Group className="mb-3" controlId="formBasicEmail"> */}
            <Form.Label>Title</Form.Label>

            <Form.Control 
            onChange={(e) => setTitle(e.target.value)}
            className="w-50 mb-3" type="text" placeholder="Enter title" value={title}  />

            <Form.Label>Author</Form.Label>
            <Form.Control 
            onChange={(e) => setAuthor(e.target.value)}
            className="w-50 mb-3" type="text" placeholder="Enter author" value={author}/>

            <Form.Label>Published</Form.Label>
            <Form.Control 
            onChange={(e) => setPublished(e.target.value)}
            className="w-50 mb-3" type="date" placeholder="Enter date of publishing" 
            value={published}/>

            <Form.Label>Short description</Form.Label>
            <Form.Control 
            onChange={(e) => setShortDescription(e.target.value)}
            as="textarea" rows="4" className="mb-3" placeholder="Enter post lead" 
            value={shortDescription}/>
            <Form.Label>Main content</Form.Label>
            <Form.Control 
            onChange={(e) => setContent(e.target.value)}
            as="textarea" rows="20" className="mb-3" placeholder="Enter post content here" 
            value={content}/>
  {/*       </Form.Group> */}

        <Button variant="primary" type="submit">Add post</Button>

        </Form>
     );
}
 
export default PostAddForm;