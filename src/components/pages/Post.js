import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { getPostById } from "../../redux/postsRedux";
import { deletePost } from "../../redux/postsRedux";
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import dateToStr from "../../utils/dateToStr";

const Post = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {postId} = useParams();
    const postData = useSelector(state => getPostById( state, postId));
 

    const dispatch = useDispatch();

const deleteThisPost = (e) => {
    e.preventDefault();
    dispatch(deletePost(postId));

}

    if(!postData) return <Navigate to="/" />
    return (
    <>
        <Container>
            <Row className="justify-content-center">
            <Col lg={6}><h1>{postData.title}</h1></Col>
            <Col lg={3} className="text-end" >
                <Link to={`/post/edit/${postId}`}>
            <Button variant="outline-info" className="m-1 ">Edit</Button>
                </Link>
            <Button variant="outline-danger" className="m-1" onClick={handleShow}>Delete</Button>
            </Col>
            </Row>
            <Row className="justify-content-center">
            <Col lg={9}>
            <p><span className="fw-bold">Author: </span>{postData.author} </p>
            <p><span className="fw-bold">Published: </span> {dateToStr(postData.publishedDate)}</p>
            <p><span className="fw-bold">Category: </span>{postData.category} </p>
            </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg={9}>
            <p className="my-3" dangerouslySetInnerHTML={{ __html: postData.content}}></p>
            </Col>
            </Row>
        </Container> 

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>This operation will completely remove this post from the app!</p>
                <p>Are you sure you want to do that?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Cancel
                </Button>
                <Button variant="danger" onClick={deleteThisPost}>
                Remove
                </Button>
            </Modal.Footer>
        </Modal>
    </>
        
     );
}
 
export default Post;