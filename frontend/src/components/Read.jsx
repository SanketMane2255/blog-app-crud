
import React, { useEffect, useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import Edit from './Edit';
import axios from 'axios';

const Read = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null); // Store the selected post
  const [show, setShow] = useState(false);
  const [showMoreStates, setShowMoreStates] = useState({});

  const handleClose = () => {
    setShow(false);
    setSelectedPost(null); // Reset selected post when modal closes
  };

  const handleShow = (post) => {
    setSelectedPost(post); // Set the selected post
    setShow(true);
  };

  const getData = async () => {
    const res = await axios.get('http://localhost:5000');
    setPosts(res.data);
    
    const initialShowMoreStates = res.data.reduce((acc, post) => {
      acc[post.id] = false;
      return acc;
    }, {});
    setShowMoreStates(initialShowMoreStates);
  };

  useEffect(() => {
    getData();
  }, []);

  const toggleShowMore = (postId) => {
    setShowMoreStates((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  };

  const remove = async (postId) => {
    await axios.delete(`http://localhost:5000/delete/${postId}`).then(() => {
      getData();
    });
  };

  return (
    <div className="d-flex flex-wrap justify-content-center" style={{ backgroundColor: '#f8f9fa', padding: '20px' }}>
      {posts.map((post) => (
        <Card
          key={post.id}
          style={{
            width: '18rem',
            margin: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px',
            overflow: 'hidden',
          }}
        >
          <Card.Img
            variant="top"
            src={post.image}
            alt={post.title}
            style={{
              height: '240px',
              objectFit: 'cover',
            }}
          />
          <Card.Body>
            <Card.Title className="text-center" style={{ fontSize: '1.25rem', color: '#343a40' }}>
              {post.title}
            </Card.Title>
            <Card.Text className="text-muted text-center mb-4">
              {showMoreStates[post.id] || post.description.length <= 100
                ? post.description
                : `${post.description.slice(0, 100)}...`}
              {post.description.length > 100 && (
                <Button variant="link" onClick={() => toggleShowMore(post.id)}>
                  {showMoreStates[post.id] ? 'Read Less' : 'Read More'}
                </Button>
              )}
            </Card.Text>
            <div className="d-flex justify-content-around">
              <Button variant="warning" onClick={() => handleShow(post)}>
                Edit
              </Button>
              <Button variant="danger" onClick={() => remove(post.id)}>
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      ))}

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Update Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedPost && <Edit post={selectedPost} handleClose={handleClose} />}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Read;

