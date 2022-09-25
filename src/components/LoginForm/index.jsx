import React from "react";
import { useForm } from "react-hook-form";
import { FieldError } from "../../assets";
import { Form } from "react-bootstrap";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineLock } from "react-icons/ai";

/**
 *
 * @returns
 */
export default function LoginForm({ onLoginFormSubmit }) {
  const { register, handleSubmit, errors } = useForm();
  
  return (
    <Form onSubmit={handleSubmit(onLoginFormSubmit)} className="text-left">
      <Form.Label>
          <span className="text-danger"> * </span>User Name
        </Form.Label>
      <div className="field-wrapper input">
        
        <BsFillPersonFill className="feather-user" />
        <Form.Control
          className="mt-1"
          name="username"
          type="text"
          placeholder="Enter Email"
          style={{
            borderColor: errors && errors.email ? "#a80000" : "",
          }}
          ref={register({ required: true })}
        />
        {errors.email && <FieldError message={"This Field is Required"} />}
      </div>
      <Form.Label>
          <span className="text-danger"> * </span>Password
        </Form.Label>
      <div className="field-wrapper input">
        <AiOutlineLock className="feather-lock" />
        <Form.Control
          className="mt-1"
          name="password"
          type="password"
          placeholder="Enter Password"
          style={{
            borderColor: errors && errors.password ? "#a80000" : "",
          }}
          ref={register({ required: true })}
        />

        {errors.email && <FieldError message={"This Field is Required"} />}
      </div>
      <div className="d-sm-flex justify-content-between">
        <div className="field-wrapper">
  
  
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </div>
      </div>
    </Form>
  );
}
