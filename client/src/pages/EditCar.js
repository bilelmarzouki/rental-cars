import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../components/DefaultLayout";
//import spinner from "../components/Spinner";
//import { addcar } from "../redux/actions/carsActions";
import { Col, Row, Input, Form } from "antd";
import { addCar, editCar, getAllcars } from "../redux/actions/carsActions";
import { useParams } from "react-router-dom";
//import { use } from "express/lib/application";

function EditCar({match}) {
  const [name, setname] = useState("");
  const [image, setimage] = useState("");
  const [rentPerHour, setrentPerHour] = useState("");
  const [capacity, setcapacity] = useState("");
  const [fuelType, setfuelType] = useState("");
  const { cars } = useSelector((state) => state.car);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alert);
  const [car, setcar] = useState();
  const { carid } = useParams();
  const [totalcars, settotalcars] = useState([]);
  
   
  useEffect(() => {
    if (Array.isArray(cars) && cars.length === 0) {
      dispatch(getAllcars());
    }
  }, []);

  useEffect(() => {
    if (!carid && cars.length === 0) return;
    const carObj = cars.find((car) => car._id === carid);
    console.log("carObj", carObj);
    if (carObj) {
      settotalcars(cars)
      setcar(carObj);
    }
  }, [cars]);

  function onFinish(values) {
    values._id = car._id;

    dispatch(editCar(values));

    console.log(values);
  }
  console.log(car);
  return (
    <DefaultLayout>
      {loading}
      <Row justify="center  mt-5">
        
        <Col lg={12} sm={24}>
        {totalcars.length > 0 && (
          <Form initialValues={car} className="bs1 p-2" layout="vertical" onFinish={onFinish}>
            <h3>Edit Car</h3>
              {car.name}
             
              
            <hr />
            <Form.Item  name="name" label="Car name" rules={[{ require: true }]}>
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
              <button  className="btn1" >
                Edit CAR
              </button>
            </div>
          </Form>
        )}  
        </Col>
      </Row>
    </DefaultLayout>
  );
}
export default EditCar;
