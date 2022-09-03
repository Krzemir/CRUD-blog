//components
import PropTypes from 'prop-types'; 
import ReactQuill from 'react-quill';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';

//hooks
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';

//functions


import { getAllCategories } from "../../redux/categoriesRedux";

//styles
import 'react-quill/dist/quill.snow.css';
import "react-datepicker/dist/react-datepicker.css";


const PostForm = ({action, actionText, ...props}) => {

    const allCategories = useSelector(getAllCategories)

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author || '');
    const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
    const [category, setCategory] = useState(props.category ||'');
    const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
    const [content, setContent] = useState(props.content || '');
    const [contentError, setContentError] = useState(false);
    const [dateError, setDateError] = useState(false);
    const [categoryError, setCategoryError] = useState(false);
    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const handleSubmit = e => { 
        setContentError(!content)
        setDateError(!publishedDate)
        setCategoryError(!category)
        if(content && publishedDate) {
            action({title, author, publishedDate, shortDescription, content, category});
        } 
    };

    
    return ( 
        <Form onSubmit={validate(handleSubmit)}>
            <Form.Label>Title</Form.Label>

            <Form.Control 
            {...register("title", { required: true, minLength: 4 })}
            onChange={(e) => setTitle(e.target.value)}
            className="w-50 mb-3" type="text" placeholder="Enter title" value={title}  />
            {errors.title && <small className="d-block form-text text-danger my-2">This field is required and has to be at least 4-signs long</small>}
            <Form.Label>Author</Form.Label>
            <Form.Control 
            {...register("author", { required: true, minLength: 4 })}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-50 mb-3" type="text" placeholder="Enter author" value={author}/>
            {errors.author && <small className="d-block form-text text-danger my-2">This field is required and has to be at least 4-signs long</small>}

            <Form.Label>Published</Form.Label>
            <DatePicker selected={publishedDate} 
            dateFormat='dd/MM/yyyy'
            onChange={(date) => setPublishedDate(date)} 
            className="mb-3"/>
            {dateError && <small className="d-block form-text text-danger my-2">Date can't be empty</small>}

            <Form.Label>Category</Form.Label>
            <Form.Select aria-label="Default select example" className="w-50 mb-3"  onChange={(e) => setCategory(e.target.value)}>
                <option>Choose</option>
                {allCategories.map((category) => (
                <option value={category.name} key={category.id}>
                {category.name}
                </option>
                ))} 
                
             </Form.Select>
             {categoryError && <small className="d-block form-text text-danger my-2">Category must be chosen</small>}
            <Form.Label>Short description</Form.Label>
            <Form.Control 
            {...register("shortDescription", { required: true, minLength: 4 })}
            onChange={(e) => setShortDescription(e.target.value)}
            as="textarea" rows="4" className="mb-3" placeholder="Enter post lead" 
            value={shortDescription}/>
            {errors.shortDescription && <small className="d-block form-text text-danger my-2">This field is required and has to be at least 20-signs long</small>}
            <Form.Label>Main content</Form.Label>
            <ReactQuill theme="snow" value={content} onChange={setContent} />
            {contentError && <small className="d-block form-text text-danger my-2">Content can't be empty</small>}

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