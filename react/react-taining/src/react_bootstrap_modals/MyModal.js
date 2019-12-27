import React  from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default class MyModal extends React.Component {

  render() {
    return(
      <div>
      <Modal
      show={this.props.show}
      onHide={this.props.onHide}
      centered
      autoFocus="true"
      size={this.props.size}
      backdrop="true">

      <Modal.Header closeButton>
        <Modal.Title>Hi! this is a Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <p>This is Modal Body</p>
      <span>Hello, i m a popup!!</span>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={this.props.onHide}>Close</Button>
        <Button variant="secondary">Save Changes</Button>
        <Button variant="success" onClick={this.props.setSize}>Switch to Large popup</Button>
      </Modal.Footer>

      </Modal>
      </div>
    )
  }
}
