  import React, {useState} from 'react';
  import { Modal,Button,Form } from 'react-bootstrap';
  const Add = ({addMovie}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rate, setRate] = useState(5);
  const [description, setDescription] = useState("");

  return (
    <>
      <Button variant="btn btn-light" style={{marginRight:'20px'}} onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Movie Tiltle</Form.Label>
    <Form.Control type="text" placeholder="Tiltle" required onChange={(e) =>setTitle(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Movie URL</Form.Label>
    <Form.Control type="url" placeholder="URL"  required onChange={(e) =>setPosterUrl(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Movie Description</Form.Label>
    <Form.Control type="text" placeholder="Description"  required onChange={(e) =>setDescription(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Movie Rate</Form.Label>
    <Form.Control type="number" placeholder="Rate"  required onChange={(e) =>setRate(e.target.value)} />
  </Form.Group>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose} onClick={() =>{
              addMovie({
                title: title,
                rate: rate,
                posterUrl: posterUrl,
                desciption: description,
})}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add