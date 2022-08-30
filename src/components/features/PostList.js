import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllPosts } from "../../redux/postsRedux";
import PostCard from "./PostCard";


const PostList = () => {
    const allPosts = useSelector(getAllPosts);

    return ( 
        <Container>
            <Row className="justify-content-between my-4">
                {allPosts.map((post) => (
                    <PostCard key={post.id} {...post} />
                ))}
            </Row>
        </Container>
     );
}
 
export default PostList;