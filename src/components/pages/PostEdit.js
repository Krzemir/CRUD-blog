import { useSelector } from "react-redux";
import {  useParams } from "react-router-dom";
import { getPostById } from "../../redux/postsRedux";

const PostEdit = () => {
    
    const {postId} = useParams();
    const postData = useSelector(state => getPostById( state, postId));

    return ( 
        <h1>Edit post</h1>
     );
}
 
export default PostEdit;