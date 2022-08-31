import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../../redux/postsRedux';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import PostForm from './PostForm';
import { getPostById } from '../../redux/postsRedux';

const PostEditForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {postId} = useParams();

    const postData = useSelector(state => getPostById( state, postId));

    const handleSubmit = postData => {
       dispatch(editPost( {...postData, id: postId }));
        navigate('/');
      };

      if(!postData) return <Navigate to="/" />
    return ( 
            <PostForm 
            action={handleSubmit} 
            title={postData.title} 
            author={postData.author} 
            publishedDate={postData.publishedDate}
            shortDescription={postData.shortDescription}
            content={postData.content}
            actionText="Edit post"/>

     );
}
 
export default PostEditForm;