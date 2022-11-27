import React, { useEffect ,useState} from 'react'
import {   useDispatch, useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { Button } from 'antd';
import { getAllcars } from '../redux/actions/carsActions';
import spinner from '../components/spinner';
import { Link } from 'react-router-dom'
import { Col, Row, Divider, DatePicker, Checkbox } from "antd";
import moment from 'moment';
const { RangePicker } = DatePicker;



function Home(){
  const {cars} = useSelector(state =>state.car)
  const {loading} =useSelector(state=>state.alert)
  const [totalCars ,setTotalcars]= useState([])
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getAllcars())
    console.log(cars)
  },[])

  useEffect(() => {
    setTotalcars(cars)
    
  }, [cars])
  function setFilter(values) {
    var selectedFrom = moment(values[0], "MM DD YYYYY  HH:mm");
    var selectedTo = moment(values[1], "MM DD YYYYY  HH:mm ");
    var temp = [];

    for (var car of cars) {
      if (car.bookedTimeSlots.length == 0) {
        temp.push(car);
      } else {
        for (var booking of car.bookedTimeSlots) {
          if (
            selectedFrom.isBetween(booking.From, booking.to) ||
            selectedTo.isBetween(booking.from, booking.to) ||
            moment(booking.from).isBetween(selectedFrom, selectedTo) ||
            moment(booking.from).isBetween(selectedFrom, selectedTo)
          ) {
          } else {
            temp.push(car);
          }
        }
      }
    }
    console.log(temp);
    setTotalcars(temp);
  }

  

  
  
  
  return (
    <DefaultLayout>
      <Row className="mt3" justify="center">
        <Col lg={20} sm={24} className="d-flex justify-content-left">
          <RangePicker showTime={{
              format: "HH:mm:ss",
              defaultValue: [
                moment("00:00:00", "HH:mm:ss"),
                moment("11:59:59", "HH:mm:ss"),
              ],
            }} onChange={setFilter} />
        </Col>
      </Row>

        {loading == true && (<spinner/>)}
      <Row justify='center'  gutter={16} className='mt-5'>
        {totalCars.map(car=>{
          return <Col lg={5} sm={24} xs={24}>
            <div className="car p-2 bs1 ">
              <img src={car.image} className="carimg"/>
              <div className='car-content d-flex align-items-center justify-content-between'>
                <div>
                  <p>{car.name}</p>
                  <p>Rent Per Hour {car.rentPerHour}/-</p>
                </div>

                <div>
                <button className="btn1 mr-2"><Link to={`/booking/${car._id}`}>Book Now</Link></button>
                </div>

              </div>
            
            </div>
            


          </Col>
        })}
      </Row>
      
        
      
    </DefaultLayout>
  )
}

export default Home