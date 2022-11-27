import moment from 'moment'
import Defaults from 'nodemon/lib/config/defaults'
import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllBookings } from '../redux/actions/bookingActions'
import { Col, Row } from "antd";

function UserBooking() {
    const { loading } = useSelector((state) => state.alert);
    const { bookings } = useSelector((state) => state.book);
    const dispatch =useDispatch()
    const user = JSON.parse(localStorage.getItem("userInfo"));

    useEffect(() => {
      dispatch(getAllBookings());
    }, []);
    return (
      <DefaultLayout>
        {loading && <spinner />}
  
        <h3 className="text-center mt-2">My Booking</h3>
        <Row justify="center" gutter={16}>
          <Col lg={16} sm={24}>
            {bookings
              .filter((o) => o.user == user._id)
              .map((booking, index) => {
                return (
                  <Row key={index} className="bs1 m-2 text-left">
                    <Col lg={12} sm={24}>
                      <p>
                        <b>{booking.car.name}</b>
                      </p>
                      <p>
                        Total hours :<b>{booking.totalHours}</b>
                      </p>
                      <p>
                        rent per hour:<b>{booking.car.rentPerHours}</b>
                      </p>
                      <p>
                        Total Amount<b>:{booking.totalAmount}</b>
                      </p>
                    </Col>
                    <Col lg={6} sm={24}>
                      <p>
                        {" "}
                        Transaction Id : <b>{booking.transactionId} </b>
                      </p>
  
                      <p>
                        {" "}
                        From: <b>{booking.bookedTimeSlots.from} </b>
                      </p>
  
                      <p>
                        {" "}
                        To: <b>{booking.bookedTimeSlots.to} </b>
                      </p>
                      <p>
                        {" "}
                        Date of Booking:{" "}
                        <b>{moment(booking.createdAt).format("MM/DD/YYYY")} </b>
                      </p>
                    </Col>
                    <Col lg={4} sm={24} className="text-right">
                      <img
                        style={{ borderRadius: 5 }}
                        src={booking.car.image}
                        height="130"
                        className="p-2"
                      />
                    </Col>
                  </Row>
                );
              })}
          </Col>
        </Row>
      </DefaultLayout>
    );
  }
  
  export default UserBooking;