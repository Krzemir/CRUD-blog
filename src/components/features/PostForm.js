import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import PropTypes from 'prop-types'; 

const PostForm = ({action, actionText, ...props}) => {

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
        e.preventDefault()
        action({title, author, publishedDate, shortDescription, content});
    };

    
    return ( 
        <Form onSubmit={handleSubmit}>
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
            onChange={(e) => setPublishedDate(e.target.value)}
            className="w-50 mb-3" type="text" placeholder="Enter date of publishing" 
            value={publishedDate}/>

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

        <Button variant="primary" type="submit">{actionText}</Button>

        </Form>
     );

    
};

PostForm.propTypes = {
    action: PropTypes.func.isRequired,
    actionText: PropTypes.string.isRequired,
    props: PropTypes.object,

}

 
export default PostForm;