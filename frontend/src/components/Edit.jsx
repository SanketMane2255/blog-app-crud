
import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Edit = ({ handleClose, post }) => {
    const [image, setImage] = useState(post.image || "");
    const [title, setTitle] = useState(post.title || "");
    const [description, setDescription] = useState(post.description || "");

    const updateData = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:5000/update/${post.id}`, { image, title, description });
            handleClose();
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    return (
        <div>
            <Form onSubmit={updateData}>
                <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        value={image}
                        type="text"
                        placeholder="Enter image link"
                        onChange={(e) => setImage(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        value={title}
                        type="text"
                        placeholder="Title of blog"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        value={description}
                        type="text"
                        placeholder="Description of blog"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Update
                </Button>
            </Form>
        </div>
    );
};

export default Edit;
