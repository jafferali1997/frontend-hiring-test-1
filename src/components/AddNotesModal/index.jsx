import React from "react";
import { Button, Form, Modal, ModalBody, ModalFooter } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { FieldError } from "../../assets";
import { useAuth } from "../../customHooks/ProvideAuth";
import TypeColor from "../../HOC/TypeColor";
import { NotesAction } from "../../redux/actions/notesAction";
import DurationRepresentation from "../DurationRepresentation";

export default function AddNotesModal({ modalData, setModalData }) {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const auth = useAuth();
  function hideFunction() {
    setModalData({ show: false });
  }

  function onSubmit(data) {
    dispatch(NotesAction(data, auth, modalData.id));
    setModalData({ show: false });
  }

  return (
    <Modal show={modalData.show} onHide={hideFunction}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          <h3>Add Notes</h3>
          <p><TypeColor>Call ID {modalData.id}</TypeColor></p>
          <br></br>
          <div className="d-flex">
            <p className="col-3 pl-0">Call Type </p>
            <p>
              <TypeColor>{modalData.call_type}</TypeColor>
            </p>
          </div>

          <div className="d-flex">
            <p className="col-3 pl-0">Duration </p>
            <DurationRepresentation duration={modalData.duration} />
          </div>

          <div className="d-flex">
            <p className="col-3 pl-0">FROM </p>
            <p>{modalData.from}</p>
          </div>
          <div className="d-flex">
            <p className="col-3 pl-0">TO </p>
            <p>{modalData.to}</p>
          </div>
          <div className="d-flex">
            <p className="col-3 pl-0">VIA</p>
            <p>{modalData.via}</p>
          </div>
          <Form.Label>Notes</Form.Label>
          <Form.Control
            as="textarea"
            name="content"
            style={{
              borderColor: errors && errors.content ? "#a80000" : "",
            }}
            ref={register({ required: true })}
          />
          {errors.content && <FieldError message={"This Field is Required"} />}
        </ModalBody>
        <ModalFooter>
          <Button className="w-100" type="submit">
            Save
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
}
