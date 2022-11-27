import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
//import spinner from "../components/Spinner";
//import { addcar } from "../redux/actions/carsActions";
import { Col, Row, Input, Form } from "antd";
import { addCar } from "../redux/actions/carsActions";

function AddCar() {
  const [name, setname] = useState("");
  const [image, setimage] = useState("");
  const [rentPerHour, setrentPerHour] = useState("");
  const [capacity, setcapacity] = useState("");
  const [fuelType, setfuelType] = useState("");

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alert);

  const submitHandler = () => {
    dispatch(addCar({name,image,rentPerHour,capacity,fuelType}));
  };
  return (
    <DefaultLayout>
      {loading }
      <Row justify="center  mt-5">
        <Col lg={12} sm={24}>
          <div className="bs1 p-2" layout="vertical">
            <h3>Add New Car</h3>

            <hr />
            <Form.Item name="name" label="Car name" rules={[{ require: true }]}>
              <Input value={name} onChange={(e) => setname(e.target.value)} />
            </Form.Item>

            <Form.Item
              name="image"
              label="image url"
              rules={[{ require: true }]}
            >
              <Input value={image} onChange={(e) => setimage(e.target.value)} />
            </Form.Item>
            <Form.Item
              name="rentPerHour"
              label="Rent per hour"
              rules={[{ require: true }]}
            >
              <Input
                value={rentPerHour}
                onChange={(e) => setrentPerHour(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="capacity"
              label="Capacity"
              rules={[{ require: true }]}
            >
              <Input
                value={capacity}
                onChange={(e) => setcapacity(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="fuelType"
              label="Fuel Type"
              rules={[{ require: true }]}
            >
              <Input
                value={fuelType}
                onChange={(e) => setfuelType(e.target.value)}
              />
            </Form.Item>

            <div className="text-right">
              <button className="btn1" onClick={submitHandler}>
                ADD CAR
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </DefaultLayout>
  );
}
export default AddCar;
