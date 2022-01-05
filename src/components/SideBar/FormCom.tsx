import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { FormSubmit, InputChange } from "../../typescript/typesList";
import { countryList } from "../../utils/countryList";
import { vaidForm } from "../../utils/valid";

type Data = {
  firstName: string,
  lastName: string,
  address: string,
  country: string,
  email: string,
  ext: string,
  phone: string,
}

type Country = {
  name: string,
  code: string
}

export default function FormCom() {
  const initialState = {
    firstName: "",
    lastName: "",
    address: "",
    country: "",
    email: "",
    ext: "",
    phone: "",
  };
  const [data, setData] = useState<Data>(initialState);

  const { country } = data;
  const [countries, setCountries] = useState<string[]>([]);
  const [type, setType] = useState<any>([]);

  const handleCountry = (c: string) => {
    setData({ ...data, country: c });
    const tCode = countryList.find((t: Country) => t.name === c);
    setType(tCode?.code);
    setCountries([]);
  };
  const changeHandler = (e: InputChange) => {
    setError([]);
    if (e.target.name) {
      const country = countryList.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      if (e.target.value.length > 2) {
        setCountries(country.map((c) => c.name));
      } else {
        setCountries([]);
      }
    }
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const [error, setError] = useState<any>({ errMsg: [] });
  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault();
    const check = vaidForm({ ...data, type });
    if (check.errLength > 0) return setError(check);
  };

  return (
    <div className="p-5">
      <h5 className="fw-bold">Thank you so much for taking the time!</h5>
      <p>Please provide the below details!</p>

      {error?.errMsg?.map((e: any) => (
        <small className="text-danger fw-bold">{e.empty}</small>
      ))}

      <Form onSubmit={handleSubmit} style={{ maxWidth: "300px" }}>
        <Form.Group className="mb-1">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="John"
            onChange={changeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Doe"
            onChange={changeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Address</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            name="address"
            placeholder="Enter your full address"
            onChange={changeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            name="country"
            placeholder="India"
            value={country}
            onChange={changeHandler}
          />
          <div className="bg-white">
            {countries?.map((c: string) => (
              <p className="m-2 p-2 pointer" onClick={() => handleCountry(c)}>
                {c}
              </p>
            ))}
          </div>
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Email ID</Form.Label>
          <Form.Control
            type="text"
            name="email"
            placeholder="example@email.com"
            onChange={changeHandler}
          />
          {error?.errMsg?.map((e: any) => (
            <small className="text-danger fw-bold">{e.email}</small>
          ))}
        </Form.Group>

        <Form.Group className="mb-1">
          <Form.Label>Phone</Form.Label>
          <Row>
            <Col md={4}>
              <Form.Control
                type="number"
                name="ext"
                placeholder="+911"
                onChange={changeHandler}
              />
            </Col>
            <Col md={8}>
              <Form.Control
                type="number"
                placeholder="123456789"
                name="phone"
                onChange={changeHandler}
              />
            </Col>
          </Row>
          {error?.errMsg?.map((e: any) => (
            <small className="text-danger fw-bold">{e.phone}</small>
          ))}
        </Form.Group>

        <button
          className="btn mt-3 fw-bold text-white"
          type="submit"
          style={{ backgroundColor: "#5CC8A1" }}
        >
          Submit Feedback
        </button>
      </Form>
    </div>
  );
}
