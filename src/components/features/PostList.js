import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postsRedux";
import { getPostByCategory } from "../../redux/postsRedux";
import PostCard from "./PostCard";


const PostList = (props) => {
    const allPosts = useSelector(getAllPosts);
    const postByCategory = useSelector(state => getPostByCategory( state, props.category));
    console.log(allPosts);

    if(props.category){
    return ( 
        <Container>
            <Row className="justify-content-start my-4 gap-3">
                {postByCategory.map((post) => (
                    <PostCard key={post.id} {...post} />
                ))}
            </Row>
        </Container>
     )} else {

    return ( 
        <Container>
            <Row className="justify-content-start my-4 gap-3">
                {allPosts.map((post) => (
                    <PostCard key={post.id} category={props.category} {...post} />
                ))}
            </Row>
        </Container>
     );
                }
}
 
export default PostList;