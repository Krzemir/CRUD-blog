
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import PostForm from './PostForm';

const PostAddForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = postData => {
       dispatch(addPost( postData ));
        navigate('/');
      };

  

    return ( 
        <PostForm action={handleSubmit} actionText="Add post"/>

     );
}
 
export default PostAddForm;