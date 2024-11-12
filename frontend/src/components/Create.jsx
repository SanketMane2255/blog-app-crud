import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import axios from "axios"

const Create = ({handleClose}) => {

    const [image, setImage] = useState();
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const sendData = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/add',{image,title,description})
        handleClose()
    }

  return (
    <div>
         <Form onSubmit={sendData}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Enter image link"  onChange={(e)=>{setImage(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Title of blog" onChange={(e)=>{setTitle(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description of blog" onChange={(e)=>{setDescription(e.target.value)}} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Create